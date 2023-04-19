class Animal {
  action() {
    console.log("animal running");
  }
  aaa() {
    console.log("aaaa");
  }
}
class Dog extends Animal {
  action() {
    console.log("dog running");
  }
  bbb() {
    console.log("bbb");
  }
}
class Fish extends Animal {
  action() {
    console.log("Fish swimming");
  }
  bbb() {
    console.log("bbb");
  }
}
function makeActions(animals: Animal[]) {
  animals.forEach((item) => {
    item.action();
    item.aaa();
    console.log(item);
  });
}

makeActions([new Dog(), new Fish()]);
