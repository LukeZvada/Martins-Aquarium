import {useLocation} from "./locationDataProvider.js"
import {locationAsHTML} from "./locationHTMLMaker.js"

export const locationList = () => {
    const contentElement = document.querySelector(".location")
    const locations = useLocation()
    
    let locationHTMLRep = ""
    for(const location of locations) { 
        locationHTMLRep += locationAsHTML(location)
    }
    
    contentElement.innerHTML += `
    <article>
        ${locationHTMLRep}
    </article>
    `
}


    
