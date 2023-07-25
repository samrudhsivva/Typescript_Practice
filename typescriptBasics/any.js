"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a;
a = 22;
// a.ifo = 23;
// a();
var b;
b = 23;
b = "sd";
//b.add=23; will give error
b.toString; //using type casting to avoid error
function hasEligibility(obj) {
    return !!obj && typeof obj == "object" && "eligibility" in obj;
}
var person = {
    eligibility: "YES",
};
var isEligible = hasEligibility(person);
console.log(isEligible);
