const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Teacher name is required"],
      trim: true,
    },
    nameBn: {
      type: String,
      trim: true,
      default: "",
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
      trim: true,
      default: "Senior Teacher",
    },
    designationBn: {
      type: String,
      trim: true,
      default: "",
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
      default: "Science",
    },
    qualification: {
      type: String,
      trim: true,
      default: "M.Sc / B.Ed",
    },
    experience: {
      type: String,
      trim: true,
      default: "10 Years Experience",
    },
    experienceBn: {
      type: String,
      trim: true,
      default: "১০ বছরের অভিজ্ঞতা",
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    photo: {
      type: String,
      trim: true,
      default: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    bioBn: {
      type: String,
      trim: true,
      default: "",
    },
    salary: {
      type: Number,
      default: 35000,
    },
    assignedClass: {
      type: String,
      trim: true,
      default: "Class 9",
    },
    subjects: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
