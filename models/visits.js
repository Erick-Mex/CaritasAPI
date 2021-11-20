import mysql from "mysql";

//Conexion con la base de datos
const pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: "",
  database: "algo",
});

export default class VisitModel {
  constructor() {
    this.sqlConnection = pool;
  }
  
  //Query para retornar todas las visitas
  getVisits() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("SELECT * FROM `bitacora`", (err, rows) => {
          connection.release();
          if (err) reject(err);
          resolve(rows);
        });
      });
    });
  }

  //Query para agregar una visita
  setVisit(department, reason, date) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(
          "INSERT INTO `bitacora`(`departamento`, `motivo`, `fecha`) VALUES (?, ?, ?)",
          [department, reason, date],
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
