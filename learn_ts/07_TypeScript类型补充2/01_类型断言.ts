// const el = document.getElementById("why") as HTMLImageElement;
// el.src = "asd";
// 因为范围太广了所以使用断言

// 另外的案例：Person是Student的父类 所以需要as进行转换
class Person {}
class Student extends Person {
  studing() {}
}
function sayHello(p: Person) {
  (p as Student).studing();
}
const stu = new Student();
sayHello(stu);

// 3.
const message = "124";
const num: number = message as any as number; //message as unknown as number
console.log(typeof num);

export {};
