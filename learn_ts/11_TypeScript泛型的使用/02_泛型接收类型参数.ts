function foo<T, E, O>(arg1: T, arg2: E, arg3: O, ...arg: T[]) {}
foo<number, string, boolean>(12, "222", true);
