import mongoose from "mongoose";
import Student from "../models/Student.js";

const getAllStudents = async (req, res, next) => {
  try {
    let page = 1;
    let limit = 10;

    if (req.query.page !== undefined) {
      const parsedPage = Number(req.query.page);
      if (!Number.isInteger(parsedPage) || parsedPage < 1) {
        return res.status(400).json({
          success: false,
          message: "Page must be a positive integer greater than or equal to 1",
        });
      }
      page = parsedPage;
    }

    if (req.query.limit !== undefined) {
      const parsedLimit = Number(req.query.limit);
      if (!Number.isInteger(parsedLimit) || parsedLimit < 1 || parsedLimit > 100) {
        return res.status(400).json({
          success: false,
          message: "Limit must be an integer between 1 and 100",
        });
      }
      limit = parsedLimit;
    }

    const filter = {};
    if (req.query.course && typeof req.query.course === "string" && req.query.course.trim()) {
      filter.course = req.query.course.trim();
    }

    const [students, totalStudents] = await Promise.all([
      Student.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),

      Student.countDocuments(filter),
    ]);

    return res.status(200).json({
      success: true,
      count: students.length,
      pagination: {
        currentPage: page,
        limit,
        totalStudents,
        totalPages: Math.ceil(totalStudents / limit),
      },
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export { getAllStudents, getStudentById };
