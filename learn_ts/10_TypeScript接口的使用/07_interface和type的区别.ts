interface IFoo {
  name: string;
}
interface IFoo {
  age: number;
}

const foo: IFoo = {
  name: "WHY",
  age: 0,
};

// interface 定义多个并不会覆盖他会将这些同一个接口的里面的属性进行合并
// type不允许定义同一个

export {};
