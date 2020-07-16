const fishCollection = [
    { 
        name: "Dory",
        type: "Blue Tang",
        length: 4,
        location: "Great Barrier Reef",
        diet: "Plankton",
        images: "./images/Blue Tang.jpg",
    },
    {
        name: "Nemo",
        type: "Clown Fish",
        length: 5,
        location: "Great Barrier Reef",
        diet: "Plankton",
        images: "./images/Clown Fish.jpg",
    },
    {
        name: "Ted",
        type: "Marlin",
        length: 14,
        location: "Pacific and Atlantic Ocean",
        diet: "Tuna",
        images: "./images/Marlin.jpg",
    },
] 

/* Export = Exporting this function out of this component and importing it into the main.css file*/
export const useFish = () => { 
    //.slice returns a copy of the fishCollection Array.
    return fishCollection.slice() 
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const theFish of fishCollection) {
        if (theFish.length % 3 === 0) {
            holyFish.push(theFish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const theFish of fishCollection) {
        if (theFish.length % 5 === 0 && theFish.length % 3 !== 0)
        soldiers.push(theFish)
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const theFish of fishCollection) {
        if (theFish.length % 5 !== 0 && theFish.length % 3 !== 0)
        regularFish.push(theFish)
    }

    return regularFish
}
