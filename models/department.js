import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: "",
  database: "algo",
});

export default class departmentModel {
  constructor() {
    this.sqlConnection = pool;
  }

  //Query para retornar todos los empleados
  getDepartment() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("SELECT * FROM `departamento`", (err, rows) => {
          connection.release();
          if (err) reject(err);
          resolve(rows);
        });
      });
    });
  }

  addDepartment(nameDepartment, Head_of_Department, email) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("INSERT INTO `departamento` (`nombre`, `jefe`, `correo`) VALUES (?, ?, ?)", [nameDepartment, Head_of_Department, email], (err, rows) => {
          connection.release();
          if (err) reject(err);
          resolve(rows);
        });
      });
    });
  }

  deleteDepartment(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("DELETE FROM `departamento` WHERE id=?", [id], (err, rows) => {
          connection.release();
          if (err) reject(err);
          resolve(rows);
        });
      });
    });
  }
}
