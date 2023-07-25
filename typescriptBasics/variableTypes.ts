export {}
let isGreater: boolean = true;
let myName: string = "Samrudh";
let myAge: number = 22;
console.log(isGreater, myName, myAge);
let myFriends: Array<string> = ["pranay", "bharath", "prasad", "varun"];
let myPackages: Array<number> = [660000, 1300000, 20000000];
console.log(myFriends, myPackages);
let propertyDetails: [string, number] = ["shetty", 40000000];

enum codingLevel {
  "Beginner" = 0,
  "Novice" = 1,
  "Intermediate" = 2,
  "Expert" = 3,
}

let myCodingLevel: codingLevel = codingLevel.Intermediate;

console.log(myCodingLevel);
