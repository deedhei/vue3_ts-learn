interface IPerson {
  name: string;
  age: number;
  height: number;
}
const info = {
  name: "zx",
  age: 18,
  height: 178,
  address: "广州市",
};
// freshness 擦除 在检查当中会把address擦除再去检测
const p: IPerson = info;
console.log(info);
console.log(p);

export {};
