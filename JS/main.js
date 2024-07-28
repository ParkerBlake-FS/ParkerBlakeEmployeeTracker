const employees = [];
//Main class will not call
class Employee {
  constructor(n, a) {
    this.name = n;
    this.age = a;
    this.annualSalary = 0;
  }
}
//Manager extended class
class Manager extends Employee {
  constructor(p, n, a) {
    super(n, a);
    this.payRate = parseInt(p);
    this.type = "Manager";
    this.hours = 40;
    this.calculatePay();
  }
  calculatePay() {
    this.annualSalary = this.payRate * 40 * 52 - 1000;
  }
}
//Parttime extended class
class PartTime extends Employee {
  constructor(p, h, n, a) {
    super(n, a);
    this.payRate = parseInt(p);
    this.hours = parseInt(h);
    this.type = "Part Time";
    this.calculatePay();
  }
  calculatePay() {
    this.annualSalary = this.payRate * this.hours * 52;
  }
}

class Main {
  //constructor

  constructer() {}

  //display menu function
  displayMenu() {
    let choice = Number(
      prompt(
        "Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees"
      )
    );
    //Switch conditional that will help you select the right menu item by the correlating number. WORKS
    switch (choice) {
      case 1:
        this.addEmployee();
        break;
      case 2:
        this.removeEmployee();
        break;
      case 3:
        this.editEmployee();
        break;
      case 4:
        this.displayEmployee();
        break;
    }
  }
  //add employee function
  addEmployee() {
    if (employees.length === 0) {
      const employee1 = new Manager("25", "Angie", "35");
      const employee2 = new Manager("35", "Deryl", "35");
      const employee3 = new Manager("35", "Maggie", "35");

      console.log(employees);

      employees.push(employee1, employee2, employee3);
    }
    this.newEmployee = prompt(
      "Add Employee Name, age, hrs/week, pay rate (Seperate by commas"
    );
    this.newEmployeeArray = this.newEmployee.split(",");
    this.name = this.newEmployeeArray[0];
    this.age = this.newEmployeeArray[1];
    this.hours = parseInt(this.newEmployeeArray[2]);
    this.payRate = parseInt(this.newEmployeeArray[3]);

    if (this.hours === 40) {
      let employee = new Manager(this.payRate, this.name, this.age);
      employees.push(employee);
    } else if (this.hours < 40) {
      let employee = new PartTime(
        this.payRate,
        this.hours,
        this.name,
        this.age
      );
      employees.push(employee);
    }
    console.clear();
    this.displayEmployee();
  }
  //remove employee function - I couldn't figure out how to get it to be removed by ID number. Would you be able to show me?
  removeEmployee() {
    let empRemoval = prompt("Select Employee to remove (By name)");
    let i = 0;
    employees.filter((employee) => {
      if (employee.name === empRemoval) {
        employees.splice(i, 1);
      }
    });
    console.clear();
    this.displayEmployee();
  }

  //edit employee pay function
  editEmployee() {
    let empSelect = prompt("Select Employee to change pay by name.");
    let adjustedPay = prompt(
      "What would you like this person's adjusted pay rate be?"
    );
    //it's not changing the annual salary? Not sure why. Sorry.
    employees.filter((employee) => {
      if (employee.name === empSelect) {
        employee.payRate = adjustedPay;
        console.log(employee.name);
      }
    });
    console.clear();
    console.log(adjustedPay);

    this.displayEmployee();
  }
  //Display employee function
  displayEmployee() {
    console.clear();
    if (employees.length === 0) {
      const employee1 = new Manager("40", "Angie", "35");
      const employee2 = new Manager("36", "Deryl", "35");
      const employee3 = new Manager("20", "Maggie", "35");

      console.log(employees);

      employees.push(employee1, employee2, employee3);
    }

    console.log("My Employees:");
    //console logging results by iterating through each item in the array.
    console.log("ID\t\tName\t\tAge\t\tSalary\t\tHrs\t\tPay\t\tType");
    let i = 0;
    employees.forEach((employee) => {
      console.log(
        `${i + 1}\t\t${employee.name}\t\t${employee.age}\t\t${
          employee.annualSalary
        }\t\t${employee.hours}\t\t${employee.payRate}\t\t${employee.type}`
      );

      i++;
    });
    this.displayMenu();
  }
}

//IIFE
((e) => {
  const main = new Main().displayMenu();
})();
