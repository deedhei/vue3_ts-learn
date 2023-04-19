//
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length);
  // }
  console.log(message!.length); // ！ 表示前面的一定有值 所以不会报错
}
printMessageLength("哈哈哈");

export {};
