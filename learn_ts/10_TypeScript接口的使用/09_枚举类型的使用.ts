// type Direction = "left" | "right"

enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}
// console.log(Direction.LEFT);
// console.log("111");

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("用户左转");
      break;
    case Direction.RIGHT:
      console.log("用户右转");
      break;
    case Direction.TOP:
      console.log("用户上转");
      break;
    case Direction.BOTTOM:
      console.log("用户下转");
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
