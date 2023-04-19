class Person {
  private _name: string;
  constructor(name: string) {}
  set name(newName) {
    this._name = newName;
  }
  get name() {
    return this._name;
  }
}
const p = new Person("why");
p.name = "coderwhy";
export {};
