const mongoose = require("mongoose");
const Student = require("../models/Student");

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

module.exports = { getAllStudents, getStudentById };
