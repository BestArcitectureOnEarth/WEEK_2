// Intrinsic
class CoffeeFlavor {
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

// Extrinsic
const CoffeeOrderContext = (tableNumber) => ({
  getTable() {
    return tableNumber;
  },
});

// Flyweight Factory
class CoffeeFlavorFactory {
  constructor() {
    this.flavors = {};
    this.length = 0;
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

// 사용 예시
const testFlyweight = () => {
  const flavors = [];
  const tables = [];
  let ordersMade = 0;
  const flavorFactory = new CoffeeFlavorFactory();

  function takeOrders(flavorIn, table) {
    flavors.push(flavorFactory.getCoffeeFlavor(flavorIn));
    tables.push(CoffeeOrderContext(table));
    ordersMade++;
  }

  // 주문 처리
  takeOrders("Cappuccino", 2);

  // 주문 제공
  for (let i = 0; i < ordersMade; i++) {
    flavors[i].serveCoffee(tables[i]);
  }

  console.log(" ");
  console.log(
    `total CoffeeFlavor objects made: ${flavorFactory.getTotalCoffeeeFlavorsMade()}`
  );
};

testFlyweight();
