import dotenv from "dotenv";
import express from "express";
import employeeRouter from "./routes/employees.js";
import visitRouter from "./routes/visits.js";
import adminRouter from "./routes/admin.js";

dotenv.config();

const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(express.static("js"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("/employee", employeeRouter);
app.use("/visit", visitRouter);
app.use("/admin", adminRouter);

app.listen(port);
console.log(`The server started in port: ${port}`);
