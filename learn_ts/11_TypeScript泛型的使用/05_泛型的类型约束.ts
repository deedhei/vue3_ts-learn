// function getLength(arg: string | any[]) {
//   return arg.length;
// }
interface ILength {
  length: number;
}
function getLength<T extends ILength>(arg: T) {
  return arg.length;
}
