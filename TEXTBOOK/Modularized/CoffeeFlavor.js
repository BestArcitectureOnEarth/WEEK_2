import InterfaceEnforcer from "./InterfaceEnforcer.js";
import CoffeeOrder from "./Interface/CoffeeOrder.js";

class CoffeeFlavor extends InterfaceEnforcer {
  constructor(newFlavor) {
    super();
    this.flavor = newFlavor;
  }

  getFlavor() {
    return this.flavor;
  }

  serveCoffee(context) {
    console.log(
      `Serving Coffee flavor ${this.flavor} to table ${context.getTable()}`
    );
  }
}

// 인터페이스 적용
CoffeeFlavor.implementsInterface(CoffeeOrder);

export default CoffeeFlavor;
