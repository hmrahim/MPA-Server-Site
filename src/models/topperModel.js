const mongoose = require("mongoose");

const topperSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    nameEn: {
      type: String,
      trim: true,
      default: "",
    },
    className: {
      type: String,
      required: [true, "Class is required"],
      trim: true,
      default: "Ten", // Six, Seven, Eight, Nine, Ten
    },
    roll: {
      type: String,
      required: [true, "Roll number is required"],
      trim: true,
    },
    gpa: {
      type: String,
      trim: true,
      default: "5.00",
    },
    gpaEn: {
      type: String,
      trim: true,
      default: "5.00",
    },
    marks: {
      type: String,
      trim: true,
      default: "680/700",
    },
    marksEn: {
      type: String,
      trim: true,
      default: "680/700",
    },
    photo: {
      type: String,
      trim: true,
      default: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    },
    badge: {
      type: String,
      trim: true,
      default: "১ম স্থান (গোল্ডেন এ+)",
    },
    badgeEn: {
      type: String,
      trim: true,
      default: "1st in Class (Golden A+)",
    },
    quote: {
      type: String,
      trim: true,
      default: "নিয়মিত অধ্যয়ন এবং শিক্ষকদের সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি।",
    },
    quoteEn: {
      type: String,
      trim: true,
      default: "Consistent study and guidance from our teachers paved my path to success.",
    },
    year: {
      type: String,
      trim: true,
      default: "2026",
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

const Topper = mongoose.model("Topper", topperSchema);

module.exports = Topper;
