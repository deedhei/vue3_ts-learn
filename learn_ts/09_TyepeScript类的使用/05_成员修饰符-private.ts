class Person {
  private name: string = "";
  // 封装两个方法来访问name
  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }
}

const p = new Person();
console.log(p.getName());
p.setName("why");

// console.log(p.name);

export {};
