import CoffeeFlavorFactory from "./CoffeeFlavorFactory.js";
import CoffeeOrderContext from "./CoffeeOrderContext.js";

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

export default OrderManager;
