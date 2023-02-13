import { fetchBills, fetchBillSponsors, fetchCorpInterests, fetchCorporations, fetchCorpPacs, fetchDonations, fetchInterests, fetchPacs, fetchPoliticianPacs, fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./HonestAbe.js"

const mainContainer = document.querySelector("#container")

async function render() {
    await Promise.all([
        fetchPoliticians(),
        fetchCorporations(),
        fetchPacs(),
        fetchDonations(),
        fetchCorpPacs(),
        fetchPoliticianPacs(),
        fetchInterests(),
        fetchCorpInterests(),
        fetchBills(),
        fetchBillSponsors()
    ])

    mainContainer.innerHTML = HonestAbe()
}

render()