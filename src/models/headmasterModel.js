const mongoose = require("mongoose");

const featurePointSchema = new mongoose.Schema({
  id: { type: String, default: () => Date.now().toString() },
  text: { type: String, required: true },
  textBn: { type: String, default: "" },
  icon: { type: String, default: "check" },
});

const headmasterSchema = new mongoose.Schema(
  {
    // Section Active Status
    isActive: { type: Boolean, default: true },

    // Headmaster Persona
    name: { type: String, default: "Mr. Md. Abdul Jalil Mia" },
    nameBn: { type: String, default: "জনাব মো. আবদুল জলিল মিয়া" },
    role: { type: String, default: "Headmaster" },
    roleBn: { type: String, default: "প্রধান শিক্ষক" },
    degree: {
      type: String,
      default: "M.Sc (Physics), M.Ed (1st Class, DU) · 22+ Years in Secondary Education",
    },
    degreeBn: {
      type: String,
      default: "এম.এসসি (পদার্থবিজ্ঞান), এম.এড (প্রথম শ্রেণি, ঢাবি) · শিক্ষাক্ষেত্রে ২২+ বছরের অভিজ্ঞতা",
    },
    imageUrl: {
      type: String,
      default: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    },
    imageAlt: {
      type: String,
      default: "Headmaster Mr. Md. Abdul Jalil Mia",
    },

    // Floating Badge (Ranked Top / Model School Badge over image)
    showBadge: { type: Boolean, default: true },
    badgeText: {
      type: String,
      default: "Ranked Top Model General Secondary School in the District",
    },
    badgeTextBn: {
      type: String,
      default: "উপজেলা ও জেলা পর্যায়ের সেরা মডেল মাধ্যমিক বিদ্যালয়",
    },
    badgeIcon: { type: String, default: "★" },

    // Section Header
    tag: { type: String, default: "Welcome to Mirashani Academy" },
    tagBn: { type: String, default: "মিরাশানী একাডেমিতে স্বাগতম" },
    title: {
      type: String,
      default: "Inspiring Moral Character, Creative Thought & Academic Excellence",
    },
    titleBn: {
      type: String,
      default: "নৈতিক চরিত্র, সৃজনশীল চিন্তা ও সাধারণ শিক্ষায় শ্রেষ্ঠত্ব",
    },

    // Main Speech / Message
    description: {
      type: String,
      default:
        "Established in 2005, Mirashani Academy is a premier general secondary high school (Classes 6 to 10) dedicated to cultivating enlightened human beings. Following the National Curriculum (NCTB) and Board of Intermediate and Secondary Education standards, we nurture students through disciplined morning assemblies, well-equipped science laboratories, rich library reading habits, and communicative fluency.",
    },
    descriptionBn: {
      type: String,
      default:
        "২০০৫ সালে প্রতিষ্ঠিত মিরাশানী একাডেমি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) এবং মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ডের অধীনে পরিচালিত একটি প্রথম সারির সাধারণ মাধ্যমিক বিদ্যালয়। আমরা কেবল পুঁথিগত শিক্ষায় সীমাবদ্ধ না থেকে প্রতিটি শিক্ষার্থীর নৈতিক চরিত্র, দেশপ্রেম, নিয়মানুবর্তিতা ও বিজ্ঞানমনস্ক দৃষ্টিভঙ্গি গঠনে নিবেদিতপ্রাণ।",
    },

    // Empower Box
    showEmpowerBox: { type: Boolean, default: true },
    empowerIcon: { type: String, default: "🌱" },
    empowerText: { type: String, default: "We empower students through:" },
    empowerTextBn: { type: String, default: "আমরা শিক্ষার্থীদের গড়ে তুলি:" },
    empowerSkills: {
      type: [String],
      default: [
        "Creative Thinking & Problem Solving",
        "ICT & Coding Literacy",
        "Moral Discipline & Leadership",
        "Science & Practical Innovation",
      ],
    },
    empowerSkillsBn: {
      type: [String],
      default: [
        "সৃজনশীল চিন্তা ও সমস্যা সমাধান",
        "আইসিটি ও ডিজিটাল স্বাক্ষরতা",
        "নৈতিক মূল্যবোধ ও নেতৃত্ব",
        "বিজ্ঞানচর্চা ও ব্যবহারিক উদ্ভাবন",
      ],
    },

    // Checklist / Key Highlights
    features: {
      type: [featurePointSchema],
      default: [
        {
          id: "1",
          text: "Modern Science Labs (Physics, Chemistry, Biology)",
          textBn: "আধুনিক বিজ্ঞান ল্যাব (পদার্থ, রসায়ন ও জীববিজ্ঞান)",
          icon: "check",
        },
        {
          id: "2",
          text: "Digital Multimedia Classrooms & ICT Computer Center",
          textBn: "ডিজিটাল মাল্টিমিডিয়া ক্লাসরুম ও কম্পিউটার আইসিটি ল্যাব",
          icon: "check",
        },
        {
          id: "3",
          text: "Active Scouts, Girl Guides & Debating Clubs",
          textBn: "সক্রিয় বাংলাদেশ স্কাউটস, গার্ল গাইডস ও বিতর্ক পরিষদ",
          icon: "check",
        },
        {
          id: "4",
          text: "Large Sports Field, Shaheed Minar & Cultural Stage",
          textBn: "প্রশস্ত সবুজ খেলার মাঠ, স্থায়ী শহীদ মিনার ও সাংস্কৃতিক মঞ্চ",
          icon: "check",
        },
      ],
    },

    // Call To Action Button 1
    btn1Show: { type: Boolean, default: true },
    btn1Text: { type: String, default: "General School Curriculum" },
    btn1TextBn: { type: String, default: "সাধারণ শিক্ষাক্রম জানুন" },
    btn1Link: { type: String, default: "/academics" },

    // Call To Action Button 2
    btn2Show: { type: Boolean, default: true },
    btn2Text: { type: String, default: "Meet Respected Teachers" },
    btn2TextBn: { type: String, default: "শ্রদ্ধেয় শিক্ষকমণ্ডলী" },
    btn2Link: { type: String, default: "/teachers" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeadmasterSection", headmasterSchema);
