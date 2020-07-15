

export const tipAsHtml = (tips) => {
    return `
    <section class="tip">
        <h5 class="tipsHeader"> ${tips.title} </h5>
            <div class="tips__text">${tips.text}</div> 
    </section>
    `
}