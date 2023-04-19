class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log(this.name + "eating");
  }
}

const p = new Person("zx", 18);
// p.age = 18;
// p.name = "zx";
p.eating();

export {};
