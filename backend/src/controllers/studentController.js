import mongoose from "mongoose";
import Student from "../models/Student.js";

const getAllStudents = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(400).json({
        message: "Invalid page or limit",
      });
    }

    const filter = {};

    if (req.query.course) {
      filter.course = req.query.course;
    }

    const students = await Student.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalStudents = await Student.countDocuments(filter);

    res.status(200).json({
      count: students.length,
      totalStudents,
      totalPages: Math.ceil(totalStudents / limit),
      students,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid student ID",
      });
    }

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const { studentId, fullName, email, course, rollNo } = req.body;

    if (!studentId || !fullName || !email || !course || !rollNo) {
      return res.status(400).json({
        message: "All fields are required (studentId, fullName, email, course, rollNo)",
      });
    }

    const existingStudent = await Student.findOne({
      $or: [{ studentId }, { email }, { rollNo }],
    });

    if (existingStudent) {
      return res.status(400).json({
        message: "Student with this studentId, email, or rollNo already exists",
      });
    }

    const student = await Student.create({
      studentId: studentId.trim(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      course: course.trim(),
      rollNo: rollNo.trim(),
    });

    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Student with this studentId, email, or rollNo already exists",
      });
    }
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export { getAllStudents, getStudentById, createStudent };
