import { InterfaceImplementation } from "./Implement.js";

// 플라이웨이트
// CoffeeOrder 인터페이스
const CoffeeOrder = {
  serveCoffee(context) {},
  getFlavor() {},
};

// 구체적 플라이웨이트
class CoffeeFlavor extends InterfaceImplementation {
  constructor(newFlaver) {
    super();
    this.flavor = newFlaver; // 새로운 맛으로 설정
  }
  // 맛 확인하기
  getFlavor() {
    return this.flavor;
  }
  // 커피 전달하기
  serveCoffee(context) {
    console.log(
      `Serving Coffee flavor ${this.flavor} to table ${context.getTable()}` // 커피 제공 로그
    );
  }
}

// CoffeeOrder 인터페이스 구현
CoffeeFlavor.implementsFor(CoffeeOrder);

// 헬퍼
const CoffeeOrderContext = (tableNumber) => ({
  getTable() {
    return tableNumber;
  },
});

export { CoffeeOrderContext, CoffeeFlavor };
