import express from "express";
import {
  getAllStudents,
  getStudentById,
  createStudent,
} from "../controllers/studentController.js";
import { verifyAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", verifyAdmin, createStudent);

export default router;