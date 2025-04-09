// Intrinsic
class CoffeeFlavor {
  constructor(newFlavor) {
    this.flavor = newFlavor;
  }

  getFlavor() {
    return this.flavor;
  }
}

// Extrinsic
class CoffeeOrderContext {
  constructor(tableNumber) {
    this.tableNumber = tableNumber;
  }

  getTable() {
    return this.tableNumber;
  }
}

let instance = null;
// Flyweight Factory
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

class OrderManager {
  constructor() {
    this.orders = [];
  }

  takeOrders(flavorIn, tableNumberIn) {
    const flavor = new CoffeeFlavorFactory().getCoffeeFlavor(flavorIn);
    const tableNumber = new CoffeeOrderContext(tableNumberIn).getTable();
    this.orders.push({ flavor, tableNumber });
  }

  serve() {
    for (const order of this.orders) {
      console.log(
        `Serving Coffee flavor ${order.flavor.getFlavor()} to table ${
          order.tableNumber
        }`
      );
    }
  }
}

// 사용 예시
const testFlyweight = () => {
  const flavorFactory = new CoffeeFlavorFactory();
  const orderManager = new OrderManager();

  // 주문 처리
  orderManager.takeOrders("Cappuccino", 2);

  // 주문 제공
  orderManager.serve();

  console.log(" ");
  console.log(
    `total CoffeeFlavor objects made: ${flavorFactory.getTotalCoffeeeFlavorsMade()}`
  );
};

testFlyweight();
