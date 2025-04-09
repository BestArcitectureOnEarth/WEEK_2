// Extrinsic
class CoffeeOrderContext {
  constructor(tableNumber) {
    this.tableNumber = tableNumber;
  }

  getTable() {
    return this.tableNumber;
  }
}

export default CoffeeOrderContext;
