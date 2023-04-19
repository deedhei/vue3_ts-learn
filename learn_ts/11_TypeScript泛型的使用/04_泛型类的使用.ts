class Point<T> {
  x: T;
  y: T;
  z: T;
  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
const p = new Point("1.33", "1.22", "1.44");
const p2 = new Point<string>("1.33", "1.22", "1.44");
const p3: Point<string> = new Point("1.33", "1.22", "1.44");

const name1: string[] = ["abc", "aaa"];
const name2: Array<string> = ["abc", "aaa"];
