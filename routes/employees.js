import express from "express";
import auth from "../middleware/auth.js";
import EmployeeModel from "../models/employee.js";
import EmployeeController from "../controller/EmployeeController.js";

const router = express.Router();

let employeeModel = new EmployeeModel();
let employee_Controller = new EmployeeController(employeeModel);

//Retorna todos los empleados almacenados en la DB
router.get("/", auth, async (req, res) => {
  let employees = await employee_Controller.getEmployee();
  try {
    res.json(employees);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Se llena un forms para poder buscar un empleado por su correo
router.get("/find", auth, async (req, res) => {
  const email = req.body.email;
  let employees = await employee_Controller.getEmployeByEmail(email);
  try {
    res.json(employees);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Se agrega un empleado a la DB con los datos enviados
router.post("/add", auth, async (req, res) => {
  const { name, email, department } = req.body;

  try {
    let newEmployee = await employee_Controller.setEmployee(
      name,
      email,
      department
    );
    res.send("Nuevo Empleado");
  } catch (err) {
    console.log(err);
    res.statusMessage = err.message;
    return res.status(400).end();
  }
});

//Se elimina al empleado de la DB en base al correo recibido
router.post("/delete", auth, async (req, res) => {
  const email = req.body.email;

  try {
    let Employee_delete = await employee_Controller.deleteEmployee(email);
    res.send("Empleado elminado");
  } catch (err) {
    console.log(err);
    res.statusMessage = err.message;
    return res.status(400).end();
  }
});

//Se cambia la info de un empleado en especifico usando su correo
router.post("/changeData", auth, async (req, res) => {
  const { email, newName, newEmail, newDepartment } = req.body;
  try {
    let employeeChange = await employee_Controller.updateEmployee(
      email,
      newName,
      newEmail,
      newDepartment
    );
    res.send("La informacion del empleado cambio");
  } catch (err) {
    console.log(err);
    res.statusMessage = err.message;
    return res.status(400).end();
  }
});

export default router;
