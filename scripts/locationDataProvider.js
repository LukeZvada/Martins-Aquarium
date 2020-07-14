const locationCollection =[

    {
        images: "./images/Atlantic Ocean.gif",
        name: "Atlantic Ocean",
        URL: "https://www.britannica.com/place/Atlantic-Ocean",
        description: "Atlantic Ocean, body of salt water covering approximately one-fifth of Earth’s surface and separating the continents of Europe and Africa to the east from those of North and South America to the west. The ocean’s name, derived from Greek mythology, means the “Sea of Atlas.” It is second in size only to the Pacific Ocean.",
    },

    {
        images: "./images/Great Barrier Reef Map.jpg",
        name: "Great Barrier Reef",
        URL: "https://www.greatbarrierreef.org/",
        description: "The Great Barrier Reef is one of the seven wonders of the natural world, and pulling away from it, and viewing it from a greater distance, you can understand why. It is larger than the Great Wall of China and the only living thing on earth visible from space",
    },

    {
        images: "./images/Pacific Ocean Map .png",
        name: "Pacific Ocean",
        URL: "https://www.britannica.com/place/Pacific-Ocean",
        description: "The Great Barrier Reef is one of the seven wonders of the natural world, and pulling away from it, and viewing it from a greater distance, you can understand why. It is larger than the Great Wall of China and the only living thing on earth visible from space",
    }
]

export const useLocation = () => { 
    return locationCollection.slice()
}