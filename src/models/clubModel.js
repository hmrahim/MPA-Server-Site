const mongoose = require("mongoose");

const clubItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => Date.now().toString(),
  },
  icon: {
    type: String,
    default: "🚀",
    trim: true,
  },
  name: {
    type: String,
    required: true,
    default: "Science & Innovation Club",
    trim: true,
  },
  nameBn: {
    type: String,
    default: "বিজ্ঞান ও উদ্ভাবন ক্লাব",
    trim: true,
  },
  desc: {
    type: String,
    default:
      "Weekly practical experiments, science model displays, astronomy sky-watching, and Math Olympiad workshops.",
    trim: true,
  },
  descBn: {
    type: String,
    default:
      "সাপ্তাহিক বৈজ্ঞানিক প্রজেক্ট প্রদর্শনী, টেলিস্কোপে আকাশ পর্যবেক্ষণ এবং গণিত অলিম্পিয়াড প্রশিক্ষণ।",
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

const clubSectionSchema = new mongoose.Schema(
  {
    // Section Active Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Word-to-word editable Section Headers (Bilingual)
    tag: {
      type: String,
      default: "Holistic Student Life",
      trim: true,
    },
    tagBn: {
      type: String,
      default: "সহ-শিক্ষা কার্যক্রম",
      trim: true,
    },
    title: {
      type: String,
      default: "Co-Curricular Clubs & Activities",
      trim: true,
    },
    titleBn: {
      type: String,
      default: "শিক্ষার্থী ক্লাব ও প্রতিভা বিকাশ",
      trim: true,
    },
    subtitle: {
      type: String,
      default:
        "Beyond the classroom, our students discover leadership, teamwork, public speaking, and creative expression.",
      trim: true,
    },
    subtitleBn: {
      type: String,
      default:
        "শ্রেণিকক্ষের বাইরে নেতৃত্ব, জনসম্মুখে বক্তৃতা, বিতর্ক ও শরীরচর্চায় শিক্ষার্থীদের স্বতঃস্ফূর্ত অংশগ্রহণ।",
      trim: true,
    },

    // Clubs list
    clubs: {
      type: [clubItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ClubSection", clubSectionSchema);
