// 덕 펀칭
// 인터페이스의 구현을 시뮬레이션하기 위한 유틸리티 클래스
// 자바의 키워드인 implements의 부재를 보완한다 -> 함수가 인터페이스를 상속할 수 있도록 해준다.
// class InterfaceImplementation {
//   static implementsFor(superclassOrInterface) {
//     if (superclassOrInterface instanceof Function) {
//       this.prototype = Object.create(superclassOrInterface.prototype);
//       this.prototype.constructor = this;
//       this.prototype.parent = superclassOrInterface.prototype;
//     } else {
//       this.prototype = Object.create(superclassOrInterface);
//       this.prototype.constructor = this;
//       this.prototype.parent = superclassOrInterface;
//     }
//     return this;
//   }
// }

class InterfaceImplementation {
  static implementsFor(superclassOrInterface) {
    const targetPrototype =
      typeof superclassOrInterface === "function"
        ? superclassOrInterface.prototype
        : superclassOrInterface;

    Object.getOwnPropertyNames(targetPrototype).forEach((name) => {
      // 기존에 정의되어 있지 않은 메서드만 추가
      if (
        name !== "constructor" &&
        typeof this.prototype[name] === "undefined"
      ) {
        this.prototype[name] = targetPrototype[name];
      }
    });

    return this;
  }
}

export { InterfaceImplementation };
