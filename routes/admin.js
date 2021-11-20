import express from "express";
import auth from "../middleware/auth.js";
import EmployeeModel from "../models/employee.js";
import EmployeeController from "../controller/EmployeeController.js";
import visitModel from "../models/visits.js";
import visitController from "../controller/visitController.js";

const router = express.Router();

let employeeModel = new EmployeeModel();
let employee_Controller = new EmployeeController(employeeModel);
let visitmodel = new visitModel();
let visitcontroller = new visitController(visitmodel);

//Se guarda el arreglo de empleados y se envia como variable
router.get("/employee", async (req, res) => {
  let employees = await employee_Controller.getEmployee();
  res.render("employee", { employees });
});

//Se guarda el arreglo de todas las visitas y se envia como variable
router.get("/visit", async (req, res) => {
  let visits = await visitcontroller.get_Visits();
  res.render("visit", { visits });
});

//Se llena un forms para poder buscar un empleado por su correo
router.post("/find", async (req, res) => {
  const email = req.body.email;
  let employees = await employee_Controller.getEmployeByEmail(email);
  try {
    res.json(employees);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Se agrega un empleado a la DB con los datos enviados
router.post("/add", async (req, res) => {
  const { name, email, department } = req.body;

  try {
    let newEmployee = await employee_Controller.setEmployee(
      name,
      email,
      department
    );
    res.redirect('/admin/employee');
  } catch (err) {
    console.log(err);
    res.statusMessage = err.message;
    return res.status(400).end();
  }

});

//Se elimina al empleado de la DB en base al correo recibido
router.post("/delete", async (req, res) => {
  const email = req.body.email;

  try {
    let Employee_delete = await employee_Controller.deleteEmployee(email);
    res.redirect('/admin/employee');
  } catch (err) {
    console.log(err);
    res.statusMessage = err.message;
    return res.status(400).end();
  }
});

//Se cambia la info de un empleado en especifico usando su correo
router.post("/changeData", async (req, res) => {
  const { email, newName, newEmail, newDepartment } = req.body;
  try {
    let employeeChange = await employee_Controller.updateEmployee(
      email,
      newName,
      newEmail,
      newDepartment
    );
    res.redirect('/admin/employee');
  } catch (err) {
    console.log(err);
    res.statusMessage = err.message;
    return res.status(400).end();
  }
});
export default router;
