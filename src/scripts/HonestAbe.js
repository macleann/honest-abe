import { CorporationList } from "./CorporationList.js"
import { PACList } from "./PACList.js"
import { PoliticianList } from "./PoliticianList.js"

export const HonestAbe = () => {
    return `
    <h1>Honest Abe</h1>
    <section>
        <h2>Politicians</h2>
        ${PoliticianList()}
        <h2>Corporations</h2>
        ${CorporationList()}
        <h2>PACs</h2>
        ${PACList()}
    </section>`
}