import { CoffeeFlavor } from "./CoffeeOrder.js";

// 플라이웨이트 팩토리
class CoffeeFlavorFactory {
  constructor() {
    this.flavors = {};
    this.length = 0;
  }

  getCoffeeFlavor(flavorName) {
    let flavor = this.flavors[flavorName];
    if (!flavor) {
      // 존재하지 않으면 하나 추가
      flavor = new CoffeeFlavor(flavorName);
      this.flavors[flavorName] = flavor;
      this.length++;
    }
    return flavor;
  }

  getTotalFlavorsMade() {
    return this.length;
  }
}
export { CoffeeFlavorFactory };
