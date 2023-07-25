"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(employeeName) {
        this.employeeName = employeeName;
    }
    Employee.prototype.getEmployeeNamelength = function () {
        return this.employeeName.length;
    };
    return Employee;
}());
// let employee1 = new Employee("Samrudh_Sivva");
// console.log(employee1.getEmployeeNamelength());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, pupils) {
        var _this = _super.call(this, managerName) || this;
        _this.pupils = pupils;
        return _this;
    }
    Manager.prototype.getPupilCount = function () {
        return this.pupils.length;
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Zuck", ["p1", "p2", "p3"]);
console.log(manager1.getEmployeeNamelength());
console.log(manager1.getPupilCount());
