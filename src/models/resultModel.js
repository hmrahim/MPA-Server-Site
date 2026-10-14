const mongoose = require("mongoose");

const subjectMarkSchema = new mongoose.Schema(
  {
    code: { type: String, default: "" },
    name: { type: String, required: true },
    fullMarks: { type: Number, default: 100 },
    written: { type: mongoose.Schema.Types.Mixed, default: 0 },
    mcq: { type: mongoose.Schema.Types.Mixed, default: 0 },
    practical: { type: mongoose.Schema.Types.Mixed, default: "-" },
    obtained: { type: Number, default: 0 },
    grade: { type: String, default: "A+" },
    gp: { type: String, default: "5.0" },
  },
  { _id: false }
);

const resultSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    studentNameBn: {
      type: String,
      trim: true,
      default: "",
    },
    fatherName: {
      type: String,
      trim: true,
      default: "Md. Delowar Hossain",
    },
    motherName: {
      type: String,
      trim: true,
      default: "Begum Rokeya",
    },
    roll: {
      type: String,
      required: [true, "Roll number is required"],
      trim: true,
    },
    regNo: {
      type: String,
      trim: true,
      default: "",
    },
    className: {
      type: String,
      required: [true, "Class is required"],
      trim: true,
      default: "Ten",
    },
    section: {
      type: String,
      trim: true,
      default: "Section A",
    },
    examName: {
      type: String,
      required: [true, "Exam name is required"],
      trim: true,
      default: "Half-Yearly Examination 2026",
    },
    session: {
      type: String,
      trim: true,
      default: "2026-2027",
    },
    institute: {
      type: String,
      trim: true,
      default: "Mirashani Academy (General High School)",
    },
    instituteCode: {
      type: String,
      trim: true,
      default: "MA-108420",
    },
    totalObtained: {
      type: Number,
      default: 0,
    },
    totalMax: {
      type: Number,
      default: 800,
    },
    gpa: {
      type: String,
      trim: true,
      default: "5.00",
    },
    grade: {
      type: String,
      trim: true,
      default: "A+",
    },
    meritPosition: {
      type: Number,
      default: 1,
    },
    remarks: {
      type: String,
      trim: true,
      default: "Outstanding & Brilliant Result (Golden A+)",
    },
    photo: {
      type: String,
      trim: true,
      default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    subjects: {
      type: [subjectMarkSchema],
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

resultSchema.index({ className: 1, roll: 1, examName: 1 });

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
