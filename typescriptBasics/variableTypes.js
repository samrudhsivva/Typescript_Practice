"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isGreater = true;
var myName = "Samrudh";
var myAge = 22;
console.log(isGreater, myName, myAge);
var myFriends = ["pranay", "bharath", "prasad", "varun"];
var myPackages = [660000, 1300000, 20000000];
console.log(myFriends, myPackages);
var propertyDetails = ["shetty", 40000000];
var codingLevel;
(function (codingLevel) {
    codingLevel[codingLevel["Beginner"] = 0] = "Beginner";
    codingLevel[codingLevel["Novice"] = 1] = "Novice";
    codingLevel[codingLevel["Intermediate"] = 2] = "Intermediate";
    codingLevel[codingLevel["Expert"] = 3] = "Expert";
})(codingLevel || (codingLevel = {}));
var myCodingLevel = codingLevel.Intermediate;
console.log(myCodingLevel);
