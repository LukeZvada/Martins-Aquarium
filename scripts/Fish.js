
// this is a function to return html 
export const fishAsHtml = (fish) => {
    return `
        <section class= "fish card fishText"> 
            <div><img class ="fish__image image__card zoom zoom:hover" src="${fish.images}" /><div>
            <div class="fish__name fishText"> <b> Name: &nbsp; </b> ${fish.name}</div> 
            <div class="fish__type fishText"> <b> Type: &nbsp; </b> ${fish.type}</div>
            <div class="fish__length fishText"> <b> Length: &nbsp; </b> ${fish.length}</div> 
            <div class="fish__location fishText"> <b> Location: &nbsp; </b> ${fish.location}</div>
            <div class="fish__diet fishText"> <b> Diet: &nbsp; </b> ${fish.diet}
        </section>
    `
}