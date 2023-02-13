import { getCorporations } from "./dataAccess.js"

export const CorporationList = () => {
    const corporations = getCorporations()

    return `
    <article class="corporations">
        ${corporations.map(corp => {
            return `
        <section class="corporation">
            <header class="corporation__name">
                <h1>${corp.name}</h1>
            </header>
            <div class="corporation__info">
                <div>Address: ${corp.address}</div>
            </div>
        </section>`
        }).join("")}
    </article>`
}