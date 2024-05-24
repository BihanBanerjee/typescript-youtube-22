// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]; // the oder is fixed. string then number then boolean
// order also matters in the case of tuples typescript.
tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string]; // tuples in typescript

const newUser: User = [112, "example@google.com"];

newUser[1] = "hc.com"; //you can do this as the 2nd value is a string type.
newUser.push(true);

/*
 * Tuple types are a type of array of known length and where the different elements may have different types.
 * A value of type [number, string] is guaranteed to have a length of 2, with a number at element 0 and a string at element 1.
 * Why then, does TypeScript allow you to call methods like push(), pop(), shift(), unshift(), and splice() on values of tuple
 * types, when such methods generally destroy the supposed guarantees of tuple types? Shouldn't it stop you from doing that,
 * just like it stops you from assigning a value like [1, "two", "three"] to [number, string] in the first place?
 */

/*Answer to the above question:->
 * Yeah, it's not great.
 * I don't know that there's a good canonical answer to this. The closest I can find is microsoft/TypeScript#6325,
 * which proposes that such methods be omitted from tuple types. This proposal was declined, on the possible grounds
 * that it would be a breaking change for existing real-world code.
 */

export {};
