// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]; // the oder is fixed. string then number then boolean
// order also matters in the case of tuples typescript.
tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "hc.com";
newUser.push(true);

export {};

