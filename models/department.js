import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: "",
  database: "caritasdb",
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

  //Query para agregar departamento
  addDepartment(nameDepartment, Head_of_Department, email) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("INSERT INTO `departamento` (`nombre_departamento`, `jefe`, `correo`) VALUES (?, ?, ?)", [nameDepartment, Head_of_Department, email], (err, rows) => {
          connection.release();
          if (err) reject(err);
          resolve(rows);
        });
      });
    });
  }

  //Eliminar departamento por ID
  deleteDepartment(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("DELETE FROM `departamento` WHERE id_Departamento=?", [id], (err, rows) => {
          connection.release();
          if (err) reject(err);
          resolve(rows);
        });
      });
    });
  }
}
