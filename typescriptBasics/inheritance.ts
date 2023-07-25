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
// let employee1 = new Employee("Samrudh_Sivva");
// console.log(employee1.getEmployeeNamelength());

class Manager extends Employee {
  pupils: Array<String>;
  constructor(managerName: string, pupils: Array<String>) {
    super(managerName);
    this.pupils = pupils;
  }

  getPupilCount() {
    return this.pupils.length;
  }
}

let manager1 = new Manager("Zuck", ["p1", "p2", "p3"]);
console.log(manager1.getEmployeeNamelength());
console.log(manager1.getPupilCount());
