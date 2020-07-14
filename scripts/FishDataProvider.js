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
