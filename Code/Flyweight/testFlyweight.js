// 사용 예시
import { CoffeeFlavorFactory } from "./CoffeeFlavorFactory.js";
import { CoffeeOrderContext } from "./CoffeeOrder.js";

const testFlyweight = () => {
  const flavors = []; // 맛 종류 리스트
  const tables = []; // 테이블 번호 리스튼
  let orderMade = 0; // 주문 건수
  const flavorFactory = new CoffeeFlavorFactory(); // 맛 공장 객체 만들기

  // 주문 받기
  function takeOrders(flavorIn, table) {
    flavors.push(flavorFactory.getCoffeeFlavor(flavorIn));
    tables.push(CoffeeOrderContext(table));
    orderMade++;
  }

  // 주문 처리
  takeOrders("Cappuccino", 2); // 카푸치노 맛으로 테이블 2번
  takeOrders("Cappuccino", 3);
  takeOrders("Espresso", 5);

  // 주문 제공
  for (let i = 0; i < orderMade; i++) {
    flavors[i].serveCoffee(tables[i]); // 커피 제공 멘트
  }

  console.log(" ");
  console.log(
    `total CoffeeFlavor objects made: ${flavorFactory.getTotalFlavorsMade()}` // 총 커피 맛 개수
  );
};

testFlyweight();
