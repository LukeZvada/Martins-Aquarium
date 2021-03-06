const tipsCollection =[
    {
        title: "Provide The Fish Enough Space",
        text: "One of the most important aspects of caring for a fish is ensuring it has sufficient space. According to the experts at Fishkeeping World, bigger is better when it comes to fish tanks. A large aquarium not only ensures your fish has ample room to swim, explore and grow, but it is also easier for you to maintain. Keeping the temperature and pH balanced is easier with a large tank than with a small one. However, a larger tank also requires a bigger investment up front as well as higher maintenance costs. We recommend researching the minimum tank requirements for your chosen fish species and then investing in the largest tank you can afford.",
    },
    {
        title: "Keep Water Balanced",
        text: "It is essential that you keep the water in your fish tank within the appropriate pH levels for your fish. If the water becomes too alkaline or too acidic it could be fatal to your fish. Before you go about balancing your fish tank, research the ideal pH level for your fish’s species as each breed has different environmental requirements.",
    },
    {
        title: "Create A Comfortable Enviroment",
        text: "Part of the fun of owning a fish is creating a visually appealing aquarium. While it’s certainly fun to decorate your fish’s home, it also helps improve your fish’s quality of life. Fish love to have plants and objects to hide behind and swim through.",
    },
    {
        title: "Clean The Tank",
        text: "Keeping your fish tank clean is a crucial part of caring for a fish. Nobody likes to live in a dirty home — not even fish! A dirty tank is ugly to look at and can also be dangerous for your fish. Your cleaning methods will vary depending on the type of fish tank you are using and the items you place inside.",
    },
    {
        title: "Feed Fish A Balanced Diet",
        text: "It’s important to learn your fish’s dietary requirements. Some fish may need live food, such as shrimp or worms, while others prefer algae or are just fine with generic fish flakes. Once you determine your fish’s ideal diet, make sure you don’t overfeed him. Just as with any other animal (or human), overeating can have negative effects on your fish’s health. Speak to your veterinarian to learn just how much and how often to feed your pet fish.",
    },
]

export const useTip = () => { 
    return tipsCollection.slice()
}