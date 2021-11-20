import express from "express";
import visitModel from "../models/visits.js";
import visitController from "../controller/visitController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

let visitmodel = new visitModel();
let visitcontroller = new visitController(visitmodel);

//Se envia todas las visitas almacenadas en la DB
router.get("/", auth, async (req, res) => {
  try {
    let visits = await visitcontroller.get_Visits();
    res.json(visits);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Se agrega una visita a la tabla Bitacora
router.post("/add", async (req, res) => {
  const { department, reason, date } = req.body;
  try {
    let newVisit = await visitcontroller.set_Visit(department, reason, date);
    res.send("Nueva visita registrada");
  } catch (err) {
    console.log(err);
    res.statusMessage = err.message;
    return res.status(400).end();
  }
});

export default router;
