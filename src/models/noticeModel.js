const mongoose = require("mongoose");

const noticeItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => Date.now().toString(),
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  titleBn: {
    type: String,
    default: "",
    trim: true,
  },
  cat: {
    type: String,
    default: "Exam",
    trim: true,
  },
  catBn: {
    type: String,
    default: "পরীক্ষা",
    trim: true,
  },
  text: {
    type: String,
    default: "",
    trim: true,
  },
  textBn: {
    type: String,
    default: "",
    trim: true,
  },
  date: {
    type: String,
    default: "25 Sep 2026",
    trim: true,
  },
  dateBn: {
    type: String,
    default: "২৫ সেপ্টেম্বর ২০২৬",
    trim: true,
  },
  author: {
    type: String,
    default: "Administration Desk",
    trim: true,
  },
  authorBn: {
    type: String,
    default: "বিদ্যালয় প্রশাসন",
    trim: true,
  },
  memoNo: {
    type: String,
    default: "",
    trim: true,
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  file: {
    type: String,
    default: "#",
    trim: true,
  },
  views: {
    type: Number,
    default: 0,
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

const noticePadConfigSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    default: "MIRASHANI ACADEMY",
    trim: true,
  },
  schoolNameBn: {
    type: String,
    default: "মিরাশানী একাডেমি",
    trim: true,
  },
  subHeader: {
    type: String,
    default: "Affiliated with Board of Intermediate & Secondary Education | General Secondary High School",
    trim: true,
  },
  subHeaderBn: {
    type: String,
    default: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড অনুমোদিত সাধারণ মাধ্যমিক উচ্চ বিদ্যালয়",
    trim: true,
  },
  address: {
    type: String,
    default: "Mirashani, Post Office: Mirashani, Upazila: Nasirnagar, District: Brahmanbaria",
    trim: true,
  },
  addressBn: {
    type: String,
    default: "গ্রাম: মিরাশানী, ডাকঘর: মিরাশানী, উপজেলা: নাসিরনগর, জেলা: ব্রাহ্মণবাড়িয়া",
    trim: true,
  },
  phone: {
    type: String,
    default: "+880 1712-345678, +880 1812-345678",
    trim: true,
  },
  email: {
    type: String,
    default: "info@mirashaniacademy.edu.bd",
    trim: true,
  },
  website: {
    type: String,
    default: "www.mirashaniacademy.edu.bd",
    trim: true,
  },
  eiin: {
    type: String,
    default: "108123",
    trim: true,
  },
  estd: {
    type: String,
    default: "1995",
    trim: true,
  },
  schoolCode: {
    type: String,
    default: "3450",
    trim: true,
  },
  logoText: {
    type: String,
    default: "MA",
    trim: true,
  },
  logoUrl: {
    type: String,
    default: "",
    trim: true,
  },
  watermarkText: {
    type: String,
    default: "MIRASHANI ACADEMY",
    trim: true,
  },
  signatoryTitle: {
    type: String,
    default: "Headmaster / Principal",
    trim: true,
  },
  signatoryTitleBn: {
    type: String,
    default: "প্রধান শিক্ষক / অধ্যক্ষ",
    trim: true,
  },
  signatoryName: {
    type: String,
    default: "Al-Hajj Md. Sirajul Islam",
    trim: true,
  },
  signatoryNameBn: {
    type: String,
    default: "আলহাজ্ব মো: সিরাজুল ইসলাম",
    trim: true,
  },
  signatureUrl: {
    type: String,
    default: "",
    trim: true,
  },
  sealUrl: {
    type: String,
    default: "",
    trim: true,
  },
});

const noticeSectionSchema = new mongoose.Schema(
  {
    // Section Active Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Word-to-word editable Section Headers (Bilingual)
    tag: {
      type: String,
      default: "Notice Board",
      trim: true,
    },
    tagBn: {
      type: String,
      default: "অফিসিয়াল নোটিশ বোর্ড",
      trim: true,
    },
    title: {
      type: String,
      default: "School Circulars & Notice Board",
      trim: true,
    },
    titleBn: {
      type: String,
      default: "বিদ্যালয় নোটিশ বোর্ড",
      trim: true,
    },
    subtitle: {
      type: String,
      default:
        "Stay updated with academic examination routines, holiday declarations, admission circulars, and official announcements.",
      trim: true,
    },
    subtitleBn: {
      type: String,
      default:
        "মিরাশানী একাডেমি প্রশাসন কর্তৃক প্রকাশিত সকল একাডেমিক পরীক্ষার রুটিন, ছুটির ঘোষণা, ভর্তি সার্কুলার এবং গুরুত্বপূর্ণ নোটিশ এক নজরে দেখুন।",
      trim: true,
    },

    // School Pad Configuration
    padConfig: {
      type: noticePadConfigSchema,
      default: () => ({}),
    },

    // SMS Alert Box Configuration (Bilingual & Dynamic)
    smsAlert: {
      isActive: { type: Boolean, default: true },
      title: { type: String, default: "Get Instant Notices via SMS Alert", trim: true },
      titleBn: { type: String, default: "এসএমএস অ্যালার্টের মাধ্যমে নোটিশ পান", trim: true },
      subtitle: {
        type: String,
        default: "Guardians can subscribe their mobile number to receive exam schedules and emergency school closures directly.",
        trim: true,
      },
      subtitleBn: {
        type: String,
        default: "অভিভাবকগণ মোবাইল নম্বর নিবন্ধন করে সরাসরি পরীক্ষার রুটিন ও জরুরি ছুটির বার্তা পেতে পারেন।",
        trim: true,
      },
      inputPlaceholder: { type: String, default: "e.g. 017XXXXXXXX", trim: true },
      inputPlaceholderBn: { type: String, default: "যেমন: ০১৭XXXXXXXX", trim: true },
      buttonText: { type: String, default: "Subscribe Free", trim: true },
      buttonTextBn: { type: String, default: "বিনামূল্যে সাবস্ক্রাইব", trim: true },
      successMsg: {
        type: String,
        default: "Thank you! Your mobile number has been registered for notice alerts.",
        trim: true,
      },
      successMsgBn: {
        type: String,
        default: "ধন্যবাদ! আপনার মোবাইল নম্বর নোটিশ অ্যালার্টের জন্য নিবন্ধিত হয়েছে।",
        trim: true,
      },
    },

    // All notices list
    notices: {
      type: [noticeItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,

  }
);

module.exports = mongoose.model("NoticeSection", noticeSectionSchema);
