export default class EmployeeController {
  constructor(employee) {
    this.employee = employee;
  }

  async getEmployee() {
    return this.employee.get_Employee();
  }
  async getEmployeByEmail(email) {
    return this.employee.get_Employee_email(email);
  }
  async getEmployeeByName(name) { 
    return this.employee.get_employee_name(name);
  }
  async setEmployee(name, email, department) {
    return this.employee.set_Employee(name, email, department);
  }
  async deleteEmployee(email) {
    return this.employee.delete_Employee(email);
  }
  async updateEmployee(email, newName, newEmail, newDepartment) {
    return this.employee.update_Employee(
      email,
      newName,
      newEmail,
      newDepartment
    );
  }
}
