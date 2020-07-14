export const locationAsHTML = (location) => {
    return `
    <section class="location__text">
        <div class="location__image image--card zoom zoom:hover"> <img src="${location.images}" width= 150px height= 150px class="center"/> </div>
        <div class="location__name location--card"><b>${location.name}</b></div>
        <div class="location__url"><b>Website:</b> <a href = "${location.URL}"></a> greatbarrierreef.org</div>
        <div class="location__description"><b>Description: </b> ${location.description} </div>
    </section>
    `
}