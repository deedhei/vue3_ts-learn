// const obj = {
//   name: "why",
//   age: 18,
// };

// let objProxy = new Proxy(obj, {
//   get(target, key) {
//     console.log(`监听到obj对象的${key}属性被访问了`);
//     return target[key];
//   },
//   set(target, key, newValue) {
//     console.log(`监听到obj对象的${key}属性被设置值`);
//     target[key] = newValue;
//   },
//   // 监听in的捕获器
//   has: function (target, key) {
//     console.log(`监听到对象的${key}属性in操作`, target);
//     return key in target;
//   },
//   apply: function (target, thisArg, argArray) {
//     console.log("对foo函数进行了apply调用");
//     console.log(thisArg, argArray);
//     return target.apply(thisArg, argArray);
//   },
//   construct: function (target, argArray, newTarget) {
//     console.log("对foo函数进行了new调用");
//     return new target(...argArray);
//   },
// });

// objProxy.apply({}, ["abc", "cba"]);
// new objProxy("abc", "cba");
// objProxy.name = "kobe";
// obj.name = "kobe";
// obj.age = 30;
// console.log(objProxy);
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);

// function foo() {}

// const fooProxy = new Proxy(foo, {
//   apply: function (target, thisArg, argArray) {
//     console.log("对foo函数进行了apply调用");
//     console.log(thisArg, argArray);
//     return target.apply(thisArg, argArray);
//   },
//   construct: function (target, argArray, newTarget) {
//     console.log(argArray, newTarget);
//     console.log("对foo函数进行了new调用");
//     return new target(...argArray);
//   },
// });

// fooProxy.apply({ 111: 111 }, ["abc", "cba"]);
// new fooProxy("abc", "cba");

// const obj = {
//   name: "why",
//   age: 18,
// };

// const objProxy = new Proxy(obj, {
//   get: function (target, key, receiver) {
//     console.log("get---------");
//     return Reflect.get(target, key);
//   },

//   set: function (target, key, newValue, receiver) {
//     console.log("set---------");
//     Reflect.set(target, key, newValue);
//   },
// });

// objProxy.name = "kobe";
// obj.name = "111";
// console.log(objProxy);
// console.log(obj);
// console.log(Reflect.get(obj, "age"));

const obj = {
  _name: "why",
  age: 18,
  get name() {
    // console.log("111");
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};

const objProxy = new Proxy(obj, {
  get(target, key) {
    console.log("get方法被访问--------", key);
    return Reflect.get(target, key);
  },
  set(tartget, key, newValue) {
    Reflect.set(tartget, key, newValue);
  },
});

console.log(objProxy.name);
