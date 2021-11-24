export default class departmentController {
    constructor(department) {
      this.department = department;
    }
  
    async get_Department() {
        return this.department.getDepartment();
    }

    async add_Department(nameDepartment, Head_of_Department, email) {
        return this.department.addDepartment(nameDepartment, Head_of_Department, email);
    }

    async delete_Department(id) {
        return this.department.deleteDepartment(id);
    }
  }
  