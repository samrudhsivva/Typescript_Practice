export {};
let a: any;
a = 22; 
// a.ifo = 23;
// a();

let b: unknown;
b = 23;
b = "sd";
//b.add=23; will give error
(b as Object).toString; //using type casting to avoid error

function hasEligibility(obj: any): obj is { eligibility: boolean } {
  return !!obj && typeof obj == "object" && "eligibility" in obj;
}

let person = {
  eligibility: "YES",
};

let isEligible = hasEligibility(person);
console.log(isEligible);
