// type： 用于定义类型的别名
type UnionType = string | number | boolean;
type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printID(id: UnionType) {}
function foo(point: PointType) {}
export {};
