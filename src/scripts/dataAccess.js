export const applicationState = {}
const API = "http://localhost:8088"

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(res => res.json())
        .then(data => applicationState.politicians = data)
}

export const getPoliticians = () => applicationState.politicians.map(politician => ({...politician}))

export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
        .then(res => res.json())
        .then(data => applicationState.corporations = data)
}

export const getCorporations = () => applicationState.corporations.map(corp => ({...corp}))

export const fetchPacs = () => {
    return fetch(`${API}/pacs`)
        .then(res => res.json())
        .then(data => applicationState.pacs = data)
}

export const getPacs = () => applicationState.pacs.map(pac => ({...pac}))

export const fetchDonations = () => {
    return fetch(`${API}/donations`)
        .then(res => res.json())
        .then(data => applicationState.donations = data)
}

export const getDonations = () => applicationState.donations.map(donation => ({...donation}))

export const fetchCorpPacs = () => {
    return fetch(`${API}/corpPacs`)
        .then(res => res.json())
        .then(data => applicationState.corpPacs = data)
}

export const getCorpPacs = () => applicationState.corpPacs.map(corpPac => ({...corpPac}))

export const fetchPoliticianPacs = () => {
    return fetch(`${API}/politicianPacs`)
        .then(res => res.json())
        .then(data => applicationState.politicianPacs = data)
}

export const getPoliticianPacs = () => applicationState.politicianPacs.map(politicianPac => ({...politicianPac}))

export const fetchInterests = () => {
    return fetch(`${API}/interests`)
        .then(res => res.json())
        .then(data => applicationState.interests = data)
}

export const getInterests = () => applicationState.interests.map(interest => ({...interest}))

export const fetchCorpInterests = () => {
    return fetch(`${API}/corpInterests`)
        .then(res => res.json())
        .then(data => applicationState.corpInterests = data)
}

export const getCorpInterests = () => applicationState.corpInterests.map(corpInterest => ({...corpInterest}))

export const fetchBills = () => {
    return fetch(`${API}/bills`)
        .then(res => res.json())
        .then(data => applicationState.bills = data)
}

export const getBills = () => applicationState.bills.map(bill => ({...bill}))

export const fetchBillSponsors = () => {
    return fetch(`${API}/billSponsors`)
        .then(res => res.json())
        .then(data => applicationState.billSponsors = data)
}

export const getBillSponsors = () => applicationState.billSponsors.map(billSponsor => ({...billSponsor}))
