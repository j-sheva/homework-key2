class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = '<table >';
    html += '<tr><th>Name</th><th>Position</th><th>Salary</th></tr>';
    for (let employee of this.employees) {
      html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
    }
    html += '</table>';
    return html;
  }
}

const employees = [
  new Employee('Yuliia', 'UX/UI Designer', 3000),
  new Employee('Anton', 'Developer', 5000),
  new Employee('Jack', 'Manager', 3500),
];

const empTable = new EmpTable(employees);
document.write(empTable.getHtml());
