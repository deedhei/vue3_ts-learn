type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
  };
};
const kobe: Person = { name: "123", friend: { name: "22" } };

console.log(kobe.friend?.name);
