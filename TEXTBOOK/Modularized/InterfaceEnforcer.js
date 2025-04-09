class InterfaceEnforcer {
  static implementsInterface(interfaceObj) {
    const missing = [];

    for (const key of Object.getOwnPropertyNames(interfaceObj)) {
      if (key === "constructor") continue;

      const methodType = typeof interfaceObj[key];
      const implType = typeof this.prototype[key];

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

export default InterfaceEnforcer;
