/*

  > Interface 덕 펀칭

  + 옛날 방식이라 prototype 을 직접 수정
  + prototype 을 직접 수정하는 방식은 ES6 의 class 문법과 호환되지 않음

class InterfaceImplementation {
  static implementsFor(superclassOrInterface) {
    if (superclassOrInterface instanceof Function) {
      this.prototype = Object.create(superclassOrInterface.prototype);
      this.prototype.constructor = this;
      this.prototype.parent = superclassOrInterface.prototype;
    } else {
      this.prototype = Object.create(superclassOrInterface);
      this.prototype.constructor = this;
      this.prototype.parent = superclassOrInterface;
    }

    return this;
  }
}

**/

class InterfaceEnforcer {
  static implementsFor(interfaceObj) {
    const missing = [];

    for (const key of Object.getOwnPropertyNames(interfaceObj)) {
      if (key === "constructor") continue;

      const methodType = typeof interfaceObj[key];
      console.log(`methodType: ${methodType}`);
      const implType = typeof this.prototype[key];
      console.log(`implType: ${implType}`);

      if (methodType === "function" && implType !== "function") {
        this.prototype[key] = interfaceObj[key]; // 강제 오버라이드용 기본 메서드
        missing.push(key);
      }
    }

    if (missing.length) {
      console.warn(
        `[${this.name}] missing interface methods: ${missing.join(", ")}`
      );
    }

    return this;
  }
}

// CoffeeOrder 인터페이스
const CoffeeOrder = {
  serveCoffee(context) {
    throw new Error("Method 'serveCoffee' must be implemented.");
  },
  getFlavor() {
    throw new Error("Method 'getFlavor' must be implemented.");
  },
  // 미구현 에러 확인용 함수
  sayHi() {
    throw new Error("Method 'sayHi' must be implemented.");
  },
};

class CoffeeFlavor extends InterfaceEnforcer {
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

// CoffeeOrder 인터페이스 구현
CoffeeFlavor.implementsFor(CoffeeOrder);

const CoffeeOrderContext = (tableNumber) => ({
  getTable() {
    return tableNumber;
  },
});

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

    // 미구현 함수 실행 -> 에러 발생
    flavors[i].sayHi();
  }

  console.log(" ");
  console.log(
    `total CoffeeFlavor objects made: ${flavorFactory.getTotalCoffeeeFlavorsMade()}`
  );
};

testFlyweight();
