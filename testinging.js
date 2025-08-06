console.log("Starting tiny mod test");

// Step 1: Define a very simple powder element
elements.test_powder = {
  color: "#aabbcc",
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 1000,
  excludeRandom: true,
};

// Step 2: Define a very simple liquid element
elements.test_liquid = {
  color: "#112233",
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1000,
  tempHigh: 100,
  stateHigh: "steam",
  excludeRandom: true,
};

console.log("Defined test_powder and test_liquid");
