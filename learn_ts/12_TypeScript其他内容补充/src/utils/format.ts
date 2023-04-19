export namespace time {
  export function format(time: string) {
    return "2222-22-22";
  }
  function foo() {} // 如果需要在外面用foo 需要用export导出
}
export namespace price {
  export function format(price: number) {
    return "99.99";
  }
}
time.format;
price.format;
