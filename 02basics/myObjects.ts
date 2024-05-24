//const User = {
//    name: "hitesh",
//    email: "hitesh@lco.dev",
//    isAvtive: true
//}

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// We can even use aliases to the default data-types we have in typescript. like:->
// type MyString = string;
// type bool = boolean;

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

const user = { name: "Ram", isPaid: true, xyz: 1 };

function createUser(user: { name: string; isPaid: boolean }): number {
  console.log(`Creating user ${user.name} with ${user.isPaid}.... ${user.xyz}`);
  return 1;
}
// The above mentioned function is the correct syntax for defining function in TS.
// The user.xyz was added intentionally to have the error. ignore that.

createUser(user);

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "h@gmail.com";
// myUser._id = "asa"

export {};

