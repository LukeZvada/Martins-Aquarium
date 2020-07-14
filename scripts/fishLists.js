//this module creates the list of fish to add to the DOM (Document Object Module)


import {useFish} from "./FishDataProvider.js"
import {fishAsHtml} from "./Fish.js"

export const fishList = () => { 
    const contentElement = document.querySelector(".fishList") //finding where to put it in the HTML doc

    const fishes = useFish()

    let fishHTMLRep = ""
    for(const fish of fishes) {
        fishHTMLRep += fishAsHtml(fish) 
    }

    contentElement.innerHTML += `
        <article class ="fishList"> 
            ${fishHTMLRep}
        </article>
    
    `
}