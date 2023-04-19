// 通常情况下，在定义一个函数时，都会给参数加上类型注解的
function foo(message: string) {}
const name = ["abc", "cba"];
// item根据上下文的环境推导出来的，这个时候可以不添加类型注解
// 上下文中的函数：可以不添加类型注解
name.forEach(function (item) {});

export {};
