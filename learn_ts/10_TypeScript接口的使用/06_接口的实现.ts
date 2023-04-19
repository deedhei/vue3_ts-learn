interface ISwim {
  swmming: () => void;
}
interface IEat {
  eating: () => void;
}
const a: ISwim = {
  swmming: function (): void {},
};

// 类实现接口
class Animal {}

class Fish extends Animal implements ISwim, IEat {
  eating: () => void;
  swmming: () => void;
}

//  编写一些公共的API，面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swmming();
}
// 所有实现了接口的类的对应的对象，都是可以传入的
swimAction(new Fish());

class Person implements ISwim {
  swmming: () => void;
}
swimAction(new Person());
export {};
