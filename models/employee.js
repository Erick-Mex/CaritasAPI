import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: "",
  database: "algo",
});

export default class EmployeeModel {
  constructor() {
    this.sqlConnection = pool;
  }

  //Query para retornar todos los empleados
  get_Employee() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("SELECT * FROM `employee`", (err, rows) => {
          connection.release();
          if (err) reject(err);
          resolve(rows);
        });
      });
    });
  }
  
  //Query para retornar un empleado por email
  get_Employee_email(email) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(
          "SELECT * FROM `employee` WHERE `correo`=?",
          [email],
          (err, rows) => {
            connection.release();
            if (err) reject(err);
            resolve(rows);
          }
        );
      });
    });
  }

  //Query para retornar un empleado por el nombre
  get_Employee_name(name) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(
          "SELECT * FROM `employee` WHERE `nombre`=?",
          [name],
          (err, rows) => {
            connection.release();
            if (err) reject(err);
            resolve(rows);
          }
        );
      });
    });
  }

  //Query para agregar un empleado
  set_Employee(name, email, department) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(
          "INSERT INTO `employee` (`nombre`, `correo`, `departamento`) VALUES (?, ?, ?)",
          [name, email, department],
          (err, rows) => {
            connection.release();
            if (err) reject(err);
            resolve(rows);
          }
        );
      });
    });
  }

  //Query para elminar a un empleado usando el email
  delete_Employee(email) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(
          "DELETE FROM `employee` WHERE correo=?",
          [email],
          (err, rows) => {
            connection.release();
            if (err) reject(err);
            resolve(rows);
          }
        );
      });
    });
  }

  //Query para actualizar los datos del empleado usando el correo
  update_Employee(email, newName, newEmail, newDepartment) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(
          "UPDATE `employee` SET `nombre`=?, `correo`=?, `departamento`=? WHERE `correo`=?",
          [newName, newEmail, newDepartment, email],
          (err, rows) => {
            connection.release();
            if (err) reject(err);
            resolve(rows);
          }
        );
      });
    });
  }
}
