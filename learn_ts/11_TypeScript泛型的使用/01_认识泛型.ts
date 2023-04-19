function sum<T>(num1: T): T {
  // return num1 + num2;
  return num1;
}
// 1. 调用方式一：明确类型
sum<number>(20);
sum<{ name: string }>({ name: "zx" });
sum<any[]>(["abc"]);

// 2. 调用方式二：类型推到
sum(50);
sum("111");
export {};
