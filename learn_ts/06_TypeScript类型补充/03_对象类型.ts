// Point:x/y -->  对象类型
function printPoint(point: { x: number; y: number; z?: number }) {}
printPoint({ x: 1, y: 2 });
printPoint({ x: 1, y: 2, z: 3 });
export {};
