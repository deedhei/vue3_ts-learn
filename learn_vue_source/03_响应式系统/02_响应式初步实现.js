class Dep {
  constructor() {
    this.subscriber = new Set();
  }

  depend(effect) {
    this.subscriber.add(effect);
  }
  notify() {
    this.subscriber.forEach((effect) => effect());
  }
}
const dep = new Dep();
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}
const info = { counter: 100, name: "why" };
const foo = { height: 1.88 };
// watchEffect1
watchEffect(function () {
  console.log("watchEffect1", info.counter * 2, info.name);
});
// watchEffect2
watchEffect(function () {
  console.log("watchEffect2", info.counter * info.counter);
});
// watchEffect3
watchEffect(function () {
  console.log("watchEffect3", info.counter * info.counter, info.name);
});
// watchEffect4
watchEffect(function () {
  console.log("watchEffect4", foo.height);
});
info.counter++;
info.name = "kobe";
dep.notify();
