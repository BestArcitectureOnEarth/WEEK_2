import CoffeeFlavorFactory from "./CoffeeFlavorFactory.js";
import OrderManager from "./OrderManager.js";

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
