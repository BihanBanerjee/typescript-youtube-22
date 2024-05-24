interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string; // It is an optional attribute. It can or can not be present in the object. Not a mandatory key.
  // startTrail: () => string
  startTrail(): string; // The object will have a method which will return a string type value.
  getCoupon(couponname: string, value: number): number;
}

interface User2 {
  githubToken: string;
}

interface Admin extends User, User2 {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  //googleId is an optional key.
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};
hitesh.email = "h@hc.com";
// hitesh.dbId = 33

