import fs from 'fs';
import readline from 'readline';
import departmentController from "../controller/departmentController.js";
import departmentModel from "../models/department.js";
import EmployeeModel from "../models/employee.js";
import EmployeeController from "../controller/EmployeeController.js";


let employeeModel = new EmployeeModel();
let employee_Controller = new EmployeeController(employeeModel);
let department_model= new departmentModel();
let department_controller = new departmentController(department_model);

export async function LineByLine(file)
{
    const fileStream = fs.createReadStream(file)

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })

    let i = 0;
    let data = [];
    for await (const line of rl) {
        data[i] = line.split(",");
        i++;
        //console.log(line);
    }
    return data;
}

export function newEmployee(name, email, department) {
    employee_Controller.setEmployee(name, email, department);
}

export function deleteEmployee(email) {
    employee_Controller.deleteEmployee(email);
}

export function updateEmployee(email, newName, newEmail, newDepartment) {
    employee_Controller.updateEmployee(email, newNmae, newEmail, newDepartment);
}

export function newDepartment(nameDepartment, Head_of_Department, Email) {
    department_controller.add_Department(nameDepartment, Head_of_Department, Email);
}

export function deleteDepartment(id) {
    department_controller.delete_Department(id);
}
