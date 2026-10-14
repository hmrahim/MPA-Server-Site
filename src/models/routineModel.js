const mongoose = require("mongoose");

const routineItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => Date.now().toString(),
  },
  time: {
    type: String,
    required: true,
    default: "08:30 AM - 09:00 AM",
    trim: true,
  },
  timeBn: {
    type: String,
    default: "সকাল ৮:৩০ - ৯:০০",
    trim: true,
  },
  title: {
    type: String,
    required: true,
    default: "Morning Assembly & Physical Drill",
    trim: true,
  },
  titleBn: {
    type: String,
    default: "প্রাত্যহিক সমাবেশ ও শারীরিক কসরত",
    trim: true,
  },
  desc: {
    type: String,
    default:
      "National anthem, scripture recitation, school oath, and PT fitness drill in main ground.",
    trim: true,
  },
  descBn: {
    type: String,
    default:
      "পবিত্র কোরআন ও ধর্মগ্রন্থ পাঠ, জাতীয় সংগীত, শপথ বাক্য পাঠ এবং মাঠভর্তি শরীরচর্চা (PT)।",
    trim: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const routineSectionSchema = new mongoose.Schema(
  {
    // Section Active Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Word to word editable Section Header
    tag: {
      type: String,
      default: "Discipline & Routine",
      trim: true,
    },
    tagBn: {
      type: String,
      default: "শৃঙ্খলা ও সময়ানুবর্তিতা",
      trim: true,
    },
    title: {
      type: String,
      default: "A Day in Mirashani School Life",
      trim: true,
    },
    titleBn: {
      type: String,
      default: "বিদ্যালয়ের একটি সাধারণ কর্মদিবস",
      trim: true,
    },
    subtitle: {
      type: String,
      default:
        "A disciplined, vibrant daily routine from morning national assembly to afternoon co-curricular activities.",
      trim: true,
    },
    subtitleBn: {
      type: String,
      default:
        "সকালের প্রাত্যহিক সমাবেশ ও জাতীয় সংগীত থেকে শুরু করে অপরাহ্নের খেলাধুলা ও সহ-শিক্ষা কার্যক্রমের সুবিন্যস্ত সূচি।",
      trim: true,
    },

    // Routine timeline items
    items: {
      type: [routineItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RoutineSection", routineSectionSchema);
