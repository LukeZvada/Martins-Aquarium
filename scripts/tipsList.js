
import {useTip} from "./tipsDataProvider.js"
import {tipAsHtml} from "./tipsHTMLMaker.js"

export const tipsList = () => {
    const contentElement = document.querySelector(".tipList")

    const tips = useTip()

    let tipHTMLRep = ""
    for (const tipObj of tips) {
        tipHTMLRep += tipAsHtml(tipObj)
    }

    contentElement.innerHTML += ` 
         <aside class="tips">
                ${tipHTMLRep}
         </aside>
    `
}