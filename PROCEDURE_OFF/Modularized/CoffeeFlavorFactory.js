import CoffeeFlavor from "./CoffeeFlavor.js";

// Flyweight Factory

let instance = null;

class CoffeeFlavorFactory {
  constructor() {
    if (!instance) {
      this.flavors = {};
      this.length = 0;
      instance = this;
    }
    return instance;
  }

  getCoffeeFlavor(flavorName) {
    let flavor = this.flavors[flavorName];
    if (!flavor) {
      flavor = new CoffeeFlavor(flavorName);
      this.flavors[flavorName] = flavor;
      this.length++;
    }
    return flavor;
  }

  getTotalCoffeeeFlavorsMade() {
    return this.length;
  }
}

export default CoffeeFlavorFactory;
