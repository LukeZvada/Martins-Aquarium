

export const quoteAsHTML = (quote) => { 
    return `
            <section class="quote__text">
                <div class="quote__text quote--card"> ${quote.text} </div>
                <div class="quote__author author--card"><b> ${quote.author} </b></div>
             </section>
    `
}