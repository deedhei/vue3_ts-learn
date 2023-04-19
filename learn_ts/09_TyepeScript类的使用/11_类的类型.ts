class Person {
  name: string = "123";
}
const p = new Person();
const p1: Person = {
  name: "why",
};
function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person());
printPerson({ name: "kobe" });
