const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "English title is required"],
      trim: true,
    },
    titleBn: {
      type: String,
      trim: true,
      default: "",
    },
    subtitle: {
      type: String,
      trim: true,
      default: "",
    },
    subtitleBn: {
      type: String,
      trim: true,
      default: "",
    },
    imageUrl: {
      type: String,
      required: [true, "Slide image URL is required"],
      trim: true,
    },
    badge: {
      type: String,
      trim: true,
      default: "Campus Highlights",
    },
    badgeBn: {
      type: String,
      trim: true,
      default: "ক্যাম্পাস হাইলাইটস",
    },
    date: {
      type: String,
      trim: true,
      default: "Session 2026-2027",
    },
    dateBn: {
      type: String,
      trim: true,
      default: "শিক্ষাবর্ষ ২০২৬-২০২৭",
    },

    // ── Button 1 (Primary CTA) ──
    btn1Show: {
      type: Boolean,
      default: true,
    },
    btn1Text: {
      type: String,
      trim: true,
      default: "Explore Academics",
    },
    btn1TextBn: {
      type: String,
      trim: true,
      default: "শিক্ষা কার্যক্রম দেখুন",
    },
    btn1Link: {
      type: String,
      trim: true,
      default: "/academics",
    },

    // ── Button 2 (Secondary CTA) ──
    btn2Show: {
      type: Boolean,
      default: true,
    },
    btn2Text: {
      type: String,
      trim: true,
      default: "Check Result",
    },
    btn2TextBn: {
      type: String,
      trim: true,
      default: "ফলাফল অনুসন্ধান",
    },
    btn2Link: {
      type: String,
      trim: true,
      default: "/results",
    },

    // ── Button 3 (Tertiary CTA / Admission / Portal) ──
    btn3Show: {
      type: Boolean,
      default: true,
    },
    btn3Text: {
      type: String,
      trim: true,
      default: "Online Admission",
    },
    btn3TextBn: {
      type: String,
      trim: true,
      default: "অনলাইন ভর্তি",
    },
    btn3Link: {
      type: String,
      trim: true,
      default: "/admission",
    },

    // Legacy compatibility fields
    primaryBtnText: { type: String, trim: true },
    primaryBtnTextBn: { type: String, trim: true },
    primaryBtnLink: { type: String, trim: true },
    secondaryBtnText: { type: String, trim: true },
    secondaryBtnTextBn: { type: String, trim: true },
    secondaryBtnLink: { type: String, trim: true },

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

const Slider = mongoose.model("Slider", sliderSchema);

module.exports = Slider;
