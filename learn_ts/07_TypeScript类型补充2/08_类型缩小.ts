// 1.typeof的类型缩小
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  } else {
    console.log();
  }
}

// 2.平等的类型缩小（=== == !==  != switch）
type Direction = "left" | "right";
function printDirection(direction: Direction) {
  switch (direction) {
    case "left":
      break;

    default:
      break;
  }
}

// 3.instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
  }
}

// 4.in
type fish = { swim: () => void };
type Dog = { run: () => void };
function move(animal: fish | Dog) {}

const fish1: fish = {
  swim: () => {
    console.log(11);
  },
};
