
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: [true, "Student full name is required"],
      trim: true,
      minlength: [2, "Full name must contain at least 2 characters"],
      maxlength: [100, "Full name cannot exceed 100 characters"],
    },

    email: {
      type: String,
      required: [true, "Student email is required"],
      unique: true,
      trim: true,
      lowercase: true
    },

    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
    },

    rollNo: {
      type: String,
      required: [true, "Roll number is required"],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
