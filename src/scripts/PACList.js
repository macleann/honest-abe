import { getPacs, getCorpPacs, getCorporations, getDonations } from "./dataAccess.js"

export const PACList = () => {
    const pacs = getPacs()
    const corpPacs = getCorpPacs()
    const corporations = getCorporations()
    const donations = getDonations()

    const matchingDonationFinder = (corpObj, pacObj) => {
        const foundDonation = donations.find(donation => {
          return corpPacs.find(corpPac => (corpPac.donId === donation.id) && (corpPac.corpId === corpObj.id) && (corpPac.pacId === pacObj.id))
        })
        return foundDonation
      }

    const contributingCorpsArray = (pac) => {
        const filteredContributorsArray = corpPacs.filter(corpPac => corpPac.pacId === pac.id)
        const contributingCorps = filteredContributorsArray.map(contributor => {
            return corporations.find(corp => contributor.corpId === corp.id)
        })
        return contributingCorps.map(corp => {
            const matchingDonation = matchingDonationFinder(corp, pac)
            const donationDate = new Date(matchingDonation.date)
            return `<li>${corp.name} (${matchingDonation.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })} on ${donationDate.toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            })})</li>`
        }).join("")
    }

    return `
    <article class="pacs">
        ${pacs.map(pac => {
            
            return `
        <section class="pac">
            <header class="pac__name">
                <h1>${pac.name}</h1>
            </header>
            <div class="pac__info">
                <div>Address: ${pac.address}</div>
            </div>
            <div class="pac__donors">
                <h4>Donors</h4>
                <ul>
                    ${contributingCorpsArray(pac)}
                </ul>
            </div>
        </section>`
        }).join("")}
    </article>`
}