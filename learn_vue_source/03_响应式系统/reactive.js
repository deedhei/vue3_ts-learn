class Dep {
  constructor() {
    this.subscriber = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscriber.add(activeEffect);
    }
  }
  notify() {
    this.subscriber.forEach((effect) => effect());
  }
}
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

// Map({key,value})  key是一个字符串
// WeakMap({key(对象)：value}) key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1、根据对象target 取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  // 2、取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue2 对row对数据进行劫持
function reactive(raw) {
  Object.keys(raw).forEach((key) => {
    const dep = getDep(raw, key);
    let value = raw[key];
    // console.log("dep==>", dep);
    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue;
          dep.notify();
        }
      },
    });
  });
  return raw;
}

// vue3 对 row进行数据劫持
// function reactive(raw) {
//   return new Proxy(raw, {
//     get(target, key) {
//       const dep = getDep(target, key);
//       dep.depend();
//       return target[key];
//     },
//     set(target, key, newValue) {
//       const dep = getDep(target, key);
//       target[key] = newValue;
//       dep.notify();
//     },
//   });
// }

// 测试代码
const info = reactive({ counter: 100, name: "why" });
const foo = reactive({ height: 1.88 });
// // watchEffect1
watchEffect(function () {
  console.log("watchEffect1", info.counter * 2, info.name);
});
// // watchEffect2
// watchEffect(function () {
//   console.log("watchEffect2", info.counter * info.counter);
// });
// // watchEffect3
// watchEffect(function () {
//   console.log("watchEffect3", info.counter * info.counter, info.name);
// });
// // watchEffect4
// watchEffect(function () {
//   console.log("watchEffect4", foo.height);
// });
info.counter++;
// info.name = "kobe";
// foo.height = 1;
