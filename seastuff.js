console.log("Debug1");

// --- Sea Water ---
elements.sea_water = {
    color: "#406080",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1025, // slightly denser than water
    tempHigh: 100,
    stateHigh: ["steam", "sea_salt"],
    reactions: {
        fire: { elem2: "steam", chance: 0.2 } // optional: reacts with fire
    },
    hidden: false
};
console.log("Debug2");
// --- Sea Salt ---
elements.sea_salt = {
    color: "#dcdcdc",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 2160,
    reactions: {
        water: { elem1: null, elem2: "salt_water", chance: 0.8 } // dissolves in water
    },
    hidden: false
};
console.log("Debug3");
