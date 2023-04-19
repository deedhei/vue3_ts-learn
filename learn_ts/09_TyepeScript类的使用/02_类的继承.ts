class Person {
  name: string = "";
  age: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log("eating");
  }
}

class Student extends Person {
  sno: number = 123;
  constructor(name: string, age: number, sno: number) {
    super(name, age);
    this.sno = sno;
  }
  studing() {
    console.log("studing");
  }
  eating(): void {
    console.log("student eating");
  }
}
class Teacher extends Person {
  title: string = "zzzzz";
  teaching() {
    console.log("teaching");
  }
}

const stu = new Student("zx", 19, 31);
// stu.name = "zx";
// stu.age = 18;
console.log(stu.name);
stu.eating();

export {};
