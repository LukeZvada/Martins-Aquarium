const quoteCollection = [
    {
    text: "I shall call him Squishy and he shall be mine and he shall be my Squishy.",
        author: "Dory",
    },
    {
    text: "No human being, however great, or powerful, was ever so free as a fish.",
        author: "John Ruskin",
    },
]

export const useQuote = () => { 
    return quoteCollection.slice()
}