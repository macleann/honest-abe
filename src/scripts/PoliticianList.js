import { getPoliticians, getCorporations, getPacs, getDonations, getCorpPacs, getPoliticianPacs, getInterests, getCorpInterests, getBills, getBillSponsors } from "./dataAccess.js"

export const PoliticianList = () => {
    const politicians = getPoliticians()
    const corporations = getCorporations()
    const pacs = getPacs()
    const corpPacs = getCorpPacs()
    const politicianPacs = getPoliticianPacs()
    const interests = getInterests()
    const corpInterests = getCorpInterests()
    const bills = getBills()
    const billSponsors = getBillSponsors()

    return `
    <article class="politicians">

    ${politicians.map(politician => {
        const billSponsorsByPolitician = billSponsors.filter(billSponsor => billSponsor.polId === politician.id)
        const foundSponsoredBills = billSponsorsByPolitician.map(billSponsor => {
            return bills.find(bill => bill.id === billSponsor.billId)
        })
        const displaySponsoredBills = foundSponsoredBills.map(bill => {
            const foundRelatedInterest = interests.find(interest => interest.id === bill.intId)
            return `
                <div>
                    ${bill.name} (Interest: ${foundRelatedInterest.name})
                </div>`
        }).join("")

        
        const politicianPacsByPolitician = politicianPacs.filter(politicianPac => politicianPac.polId === politician.id)
        const foundRelatedPacs = politicianPacsByPolitician.map(politicianPac => {
            return pacs.find(pac => pac.id === politicianPac.pacId)
        })
        const displayRelatedPacs = foundRelatedPacs.map(pac => {
            return `<li>${pac.name}</li>`
        }).join("")

      return `
        <section class="politician">
            <header class="politician__name">
                <h3 class="politician__name">${politician.firstName} ${politician.lastName}</h3>
            </header>
            <div class="politician__info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
            <div class="politician__bills">
                <h4>Sponsored Bills</h4>
                ${displaySponsoredBills}
            </div>
            <div class="politician__funders">
                <h4>Related PACs</h4>
                <ul>
                    ${displayRelatedPacs}
                </ul>
            </div>
            <div class="politician__influencers">
                <h4>Influencing Corporations</h4>
                <ul>
                    ${corporations.map(corp => {
                        let foundCorpByBill = null
                        const corpInterestsByCorporations = corpInterests.filter(corpInterest => corp.id === corpInterest.corpId)
                        const setInfluencingCorpByBill = () => {
                            corpInterestsByCorporations.filter(corpInterest => {
                                if (foundSponsoredBills.find(bill => bill.intId === corpInterest.intId)) {
                                    foundCorpByBill = corp.name
                                }
                            })
                            return foundCorpByBill
                        }

                        setInfluencingCorpByBill()

                        let foundCorpByPac = null
                        const corpPacsByCorporations = corpPacs.filter(corpPac => corp.id === corpPac.corpId)
                        const setInfluencingCorpByPac = () => {
                            corpPacsByCorporations.filter(corpPac => {
                                if (foundRelatedPacs.find(pac => pac.id === corpPac.pacId)) {
                                    foundCorpByPac = corp.name
                                }
                            })
                        }

                        setInfluencingCorpByPac()

                        if ((foundCorpByBill !== null) && (foundCorpByPac !== null)) {
                            if (foundCorpByBill === foundCorpByPac) {
                                return `<li>${corp.name}</li>`
                            }
                        }
                    }).join("")}
                </ul>
            </div>
        </section>`
    }).join("")}

    </article>`
}