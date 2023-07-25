var Employee = /** @class */ (function () {
    class Employee {
        constructor(employeeName) {
            this.employeeName = employeeName;
        }
        getEmployeeNamelength() {
            return this.employeeName.length;
        }
    }
    return Employee;
}());
var employee1 = new Employee("Samrudh_Sivva");
console.log(employee1.getEmployeeNamelength());
