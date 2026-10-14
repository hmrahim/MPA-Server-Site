const mongoose = require("mongoose");

const facilityItemSchema = new mongoose.Schema({
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
  metric: {
    type: String,
    default: "3 Specialized Labs",
    trim: true,
  },
  metricBn: {
    type: String,
    default: "৩টি পৃথক ল্যাব",
    trim: true,
  },
  title: {
    type: String,
    required: true,
    default: "Modern Science Labs",
    trim: true,
  },
  titleBn: {
    type: String,
    default: "আধুনিক ৩টি বিজ্ঞানাগার",
    trim: true,
  },
  desc: {
    type: String,
    default:
      "Separate, fully equipped laboratories for Physics, Chemistry, and Biology with microscopes, burners, glassware, and certified reagents.",
    trim: true,
  },
  descBn: {
    type: String,
    default:
      "পদার্থ, রসায়ন ও জীববিজ্ঞানের পৃথক শীতাতপ নিয়ন্ত্রিত ল্যাবরেটরি যেখানে শতভাগ ব্যবহারিক ক্লাস নিশ্চিত করা হয়।",
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

const facilitySectionSchema = new mongoose.Schema(
  {
    // Section Active Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Word to word editable Section Headers (Bilingual)
    tag: {
      type: String,
      default: "Modern Facilities",
      trim: true,
    },
    tagBn: {
      type: String,
      default: "ক্যাম্পাস অবকাঠামো",
      trim: true,
    },
    title: {
      type: String,
      default: "Campus Infrastructure & Learning Spaces",
      trim: true,
    },
    titleBn: {
      type: String,
      default: "আধুনিক সুযোগ-সুবিধা ও শিক্ষাঙ্গন",
      trim: true,
    },
    subtitle: {
      type: String,
      default:
        "A secure, verdant, and technologically equipped campus built to foster academic concentration and physical vitality.",
      trim: true,
    },
    subtitleBn: {
      type: String,
      default:
        "একটি নিরাপদ, সুশৃঙ্খল ও সবুজ ক্যাম্পাস যা শিক্ষার্থীদের পড়াশোনার অনুকূল পরিবেশ নিশ্চিত করে।",
      trim: true,
    },

    // Facilities items
    facilities: {
      type: [facilityItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FacilitySection", facilitySectionSchema);
