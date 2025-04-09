// 옛날 방식의 class 선언

const CoffeeOrderContext = (tableNumber) => ({
  getTable() {
    return tableNumber;
  },
});

export default CoffeeOrderContext;
