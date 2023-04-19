class Person {
  // 只读属性是可以放在构造器中赋值的
  readonly name: string = "123";
  constructor(name: string) {
    this.name = name;
  }
}
const p = new Person();
p.name = 123;

export {};
