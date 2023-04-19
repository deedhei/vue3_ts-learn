function foo() {}
let flag: boolean = true;
let result: unknown;
if (flag) {
  result = foo();
}
export {};
// unknown 类型只能赋值给any和unknown类型的变量
// any类型可以赋值给任意类型的
