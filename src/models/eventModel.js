const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    titleBn: {
      type: String,
      trim: true,
      default: "",
    },
    dateBadge: {
      type: String,
      trim: true,
      default: "OCT 10",
    },
    fullDate: {
      type: String,
      trim: true,
      default: "10 Oct 2026",
    },
    fullDateBn: {
      type: String,
      trim: true,
      default: "১০ অক্টো ২০২৬",
    },
    time: {
      type: String,
      trim: true,
      default: "9:00 AM - 12:30 PM",
    },
    timeBn: {
      type: String,
      trim: true,
      default: "সকাল ৯:০০ - দুপুর ১২:৩০",
    },
    location: {
      type: String,
      trim: true,
      default: "Main Academic Building & Examination Halls",
    },
    locationBn: {
      type: String,
      trim: true,
      default: "প্রধান একাডেমিক ভবন ও পরীক্ষা হল",
    },
    desc: {
      type: String,
      trim: true,
      default: "",
    },
    descBn: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
      trim: true,
      default: "Academic",
    },
    categoryBn: {
      type: String,
      trim: true,
      default: "একাডেমিক",
    },
    image: {
      type: String,
      trim: true,
      default: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
    status: {
      type: String,
      trim: true,
      default: "Upcoming",
    },
    statusBn: {
      type: String,
      trim: true,
      default: "আসন্ন",
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

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
