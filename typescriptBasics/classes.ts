export {};
class Employee {
  employeeName: string;
  constructor(employeeName: string) {
    this.employeeName = employeeName;
  }
  getEmployeeNamelength() {
    return this.employeeName.length;
  }
}
let employee1 = new Employee("Samrudh_Sivva");
console.log(employee1.getEmployeeNamelength());
