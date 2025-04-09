// CoffeeOrder 인터페이스
const CoffeeOrder = {
  serveCoffee(context) {
    throw new Error("Method 'serveCoffee' must be implemented.");
  },
  getFlavor() {
    throw new Error("Method 'getFlavor' must be implemented.");
  },
};

export default CoffeeOrder;
