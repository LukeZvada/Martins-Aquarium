//this module creates the list of fish to add to the DOM (Document Object Module)


import {mostHolyFish, soldierFish, nonHolyFish} from "./FishDataProvider.js"
import {fishAsHtml} from "./Fish.js"

const contentElement = document.querySelector(".fishList") //finding where to put it in the HTML doc

const addFishToDom = (theArrayOfFish) => {
    let fishHTMLRep = ""
    for(const fish of theArrayOfFish) {
        fishHTMLRep += fishAsHtml(fish) 
    }

    contentElement.innerHTML += `
        <article class ="fishList fishes"> 
            ${fishHTMLRep}
        </article>
    
    `
}



export const fishList = () => { 
    
    const holyFish = mostHolyFish()
    addFishToDom(holyFish)

    const soldiers = soldierFish()
    addFishToDom(soldiers)

    const regularFish = nonHolyFish()
    addFishToDom(regularFish)
}

