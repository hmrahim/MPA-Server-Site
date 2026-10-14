const mongoose = require("mongoose");

const academicGroupItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => Date.now().toString(),
  },
  icon: {
    type: String,
    default: "🔬",
    trim: true,
  },
  name: {
    type: String,
    required: true,
    default: "Science Group",
    trim: true,
  },
  nameBn: {
    type: String,
    default: "বিজ্ঞান বিভাগ",
    trim: true,
  },
  desc: {
    type: String,
    default:
      "Rigorous national curriculum in Physics, Chemistry, Biology, and Higher Mathematics supported by daily hands-on laboratory sessions. Ideal for future doctors, engineers, and scientists.",
    trim: true,
  },
  descBn: {
    type: String,
    default:
      "পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং উচ্চতর গণিতের গভীর পাঠ ও নিয়মিত ব্যবহারিক ল্যাব ক্লাস। ভবিষ্যৎ প্রকৌশলী, চিকিৎসক ও বিজ্ঞানী গড়ার আদর্শ বিভাগ।",
    trim: true,
  },
  subjects: {
    type: [String],
    default: ["Physics", "Chemistry", "Biology", "Higher Math", "General Math", "ICT"],
  },
  subjectsBn: {
    type: [String],
    default: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "উচ্চতর গণিত", "সাধারণ গণিত", "আইসিটি"],
  },
  pathway: {
    type: String,
    default: "HSC Science, Medical (MBBS), Engineering (BUET), Technology & Research",
    trim: true,
  },
  pathwayBn: {
    type: String,
    default: "উচ্চ মাধ্যমিক (বিজ্ঞান), মেডিকেল (MBBS), বুয়েট/প্রকৌশল বিশ্ববিদ্যালয় ও বৈজ্ঞানিক গবেষণা",
    trim: true,
  },
  border: {
    type: String,
    default: "border-cyan-500/30",
  },
  color: {
    type: String,
    default: "from-blue-500/20 to-cyan-500/20",
  },
  buttonText: {
    type: String,
    default: "Curriculum Details",
    trim: true,
  },
  buttonTextBn: {
    type: String,
    default: "পাঠ্যক্রমের বিবরণ",
    trim: true,
  },
  buttonLink: {
    type: String,
    default: "/academics",
    trim: true,
  },
  badge: {
    type: String,
    default: "",
    trim: true,
  },
  badgeBn: {
    type: String,
    default: "",
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

const academicGroupSectionSchema = new mongoose.Schema(
  {
    // Section Active Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Section Header
    tag: {
      type: String,
      default: "General Secondary Curriculum (Classes 6 to 10)",
      trim: true,
    },
    tagBn: {
      type: String,
      default: "সাধারণ মাধ্যমিক শিক্ষাক্রম (৬ষ্ঠ হতে ১০ম)",
      trim: true,
    },
    title: {
      type: String,
      default: "Academic Groups & Disciplines",
      trim: true,
    },
    titleBn: {
      type: String,
      default: "একাডেমিক বিভাগ ও পাঠ্য বিষয়সমূহ",
      trim: true,
    },
    subtitle: {
      type: String,
      default:
        "Our secondary curriculum prepares general students comprehensively for the Secondary School Certificate (SSC) board examinations.",
      trim: true,
    },
    subtitleBn: {
      type: String,
      default:
        "জাতীয় শিক্ষাক্রম পাঠ্যপুস্তক বোর্ড অনুমোদিত সাধারণ মাধ্যমিক শিক্ষাক্রম (এসএসসি) অনুযায়ী পাঠদান নিশ্চিত করে প্রতিটি শিক্ষার্থীর মেধা বিকাশ।",
      trim: true,
    },

    // Word to word editable labels
    keySubjectsLabel: {
      type: String,
      default: "Key Subjects",
      trim: true,
    },
    keySubjectsLabelBn: {
      type: String,
      default: "মূল বিষয়সমূহ",
      trim: true,
    },
    pathwayLabel: {
      type: String,
      default: "Career Pathway:",
      trim: true,
    },
    pathwayLabelBn: {
      type: String,
      default: "ভবিষ্যৎ ক্যারিয়ার:",
      trim: true,
    },

    // Array of groups
    groups: {
      type: [academicGroupItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AcademicGroupSection", academicGroupSectionSchema);
