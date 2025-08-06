// Sea Salt and Sea Water mod for Sandboxels

elements.sea_salt = {
    color: "#dcdcdc",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 2160,
    reactions: {
        water: { elem1: null, elem2: "salt_water", chance: 0.8 }
    }
},

elements.sea_water = {
    color: "#406080",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1025,
    tempHigh: 100,
    stateHigh: ["steam", "sea_salt"],
    reactions: {
        fire: { elem2: "steam", chance: 0.2 }
    }
}
