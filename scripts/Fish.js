
// this is a function to return html 
export const fishAsHtml = (fish) => {
    return `
        <section class= "fish card fishText"> 
            <div><img class ="fish__image image__card zoom zoom:hover" src="${fish.images}" /><div>
            <div class="fish__name"> Name: ${fish.name}</div> 
            <div class="fish__type"> Type: ${fish.type}</div>
            <div class="fish__length"> Length: ${fish.length}</div> 
            <div class="fish__location"> Location: ${fish.location}</div>
            <div class="fish__diet"> Diet: ${fish.diet}
        </section>
    `
}