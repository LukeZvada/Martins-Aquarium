
import {useQuote} from "./QuoteDataProvider.js"
import {quoteAsHTML} from "./QuoteHTMLMaker.js"

export const quoteList = () => { 
    const contentElement = document.querySelector(".quoteList")

    const quotes = useQuote()

    let quoteHTMLRep =""
    for (const quote of quotes) { 
        quoteHTMLRep += quoteAsHTML(quote)
    }

    contentElement.innerHTML += `
    <article class="quote">
        <h3 class=">Quotes</h1>
            ${quoteHTMLRep}
    </article>
    `
}