import CoffeeFlavorFactory from "./CoffeeFlavorFactory.js";
import CoffeeOrderContext from "./CoffeeOrderContext.js";

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
