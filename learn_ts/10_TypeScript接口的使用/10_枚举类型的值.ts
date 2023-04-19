// type Direction = "left" | "right"

enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}
// console.log(Direction.LEFT);
// console.log("111");

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("用户左转 ==> ", Direction.LEFT);
      break;
    case Direction.RIGHT:
      console.log("用户右转 ==> ", Direction.RIGHT);
      break;
    case Direction.TOP:
      console.log("用户上转 ==> ", Direction.TOP);
      break;
    case Direction.BOTTOM:
      console.log("用户下转 ==>", Direction.BOTTOM);
      break;
    default:
      break;
  }
}
turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);

export {};
