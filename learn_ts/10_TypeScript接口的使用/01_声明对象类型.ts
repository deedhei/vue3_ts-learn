// 通过类型别名来声明对象类型
// type InfoType = { name: string; age: number };
// 另一种方式声明对象类型：接口interface
interface InfoType {
  name: string;
  age?: number;
}

const info: InfoType = {
  name: "why",
  age: 18,
};
