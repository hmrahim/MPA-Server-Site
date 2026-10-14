const mongoose = require("mongoose");

const schoolInfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Mirashani Academy",
    },
    nameBn: {
      type: String,
      default: "মিরাশানী একাডেমি",
    },
    fullName: {
      type: String,
      default: "Mirashani Academy (General High School)",
    },
    fullNameBn: {
      type: String,
      default: "মিরাশানী একাডেমি (উচ্চ বিদ্যালয়)",
    },
    address: {
      type: String,
      default: "Mirashani Academy (General High School), College Road, Upazila Sadar, Brahmanbaria, Bangladesh",
    },
    addressBn: {
      type: String,
      default: "মিরাশানী একাডেমি (উচ্চ বিদ্যালয়), কলেজ রোড, উপজেলা সদর, ব্রাহ্মণবাড়িয়া",
    },
    phone: {
      type: String,
      default: "+880 1711-000000",
    },
    altPhone: {
      type: String,
      default: "+880 1811-000000",
    },
    email: {
      type: String,
      default: "info@mirashaniacademy.edu.bd",
    },
    admissionEmail: {
      type: String,
      default: "admission@mirashaniacademy.edu.bd",
    },
    hours: {
      type: String,
      default: "Sunday to Thursday: 8:00 AM - 4:00 PM (Office open)",
    },
    hoursBn: {
      type: String,
      default: "রবিবার থেকে বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০ (খোলা)",
    },
    emergency: {
      type: String,
      default: "+880 1911-000000 (Helpline 24/7)",
    },
    eiin: {
      type: String,
      default: "129485",
    },
    schoolCode: {
      type: String,
      default: "4521",
    },
    estd: {
      type: String,
      default: "1998",
    },
    stats: {
      studentsCount: { type: String, default: "1,850+" },
      studentsCountBn: { type: String, default: "১,৮৫০+" },
      teachersCount: { type: String, default: "54" },
      teachersCountBn: { type: String, default: "৫৪" },
      passRate: { type: String, default: "99.4%" },
      passRateBn: { type: String, default: "৯৯.৪%" },
      heritageYears: { type: String, default: "21 Yrs" },
      heritageYearsBn: { type: String, default: "২১ বছর" },
    },
    syllabusList: {
      type: [String],
      default: [
        "৬ষ্ঠ শ্রেণির পূর্ণাঙ্গ পাঠ্যবই তালিকা ও বার্ষিক সিলেবাস",
        "৭ম শ্রেণির একাডেমিক পাঠ্যক্রম সিলেবাস ও নম্বর বণ্টন",
        "৮ম শ্রেণির জুনিয়র বৃত্তি পরীক্ষার রুটিন ও মডেল প্রশ্ন",
        "৯ম শ্রেণির বিজ্ঞান বিভাগ পাঠ্যক্রম ও ল্যাব ম্যানুয়াল",
        "৯ম শ্রেণির ব্যবসায় শিক্ষা ও মানবিক পাঠ্যক্রম",
        "১০ম শ্রেণির এসএসসি মডেল টেস্ট সিলেবাস ও টেস্ট পেপার",
      ],
    },
    syllabusListEn: {
      type: [String],
      default: [
        "Class 6 Comprehensive Booklist & Annual Syllabus",
        "Class 7 Academic Curriculum & Mark Distribution",
        "Class 8 Junior Scholarship Exam Routine & Models",
        "Class 9 Science Group Curriculum & Lab Manual",
        "Class 9 Business Studies & Humanities Guide",
        "Class 10 SSC Model Test Exam Guidelines",
      ],
    },
    admissionCircular: {
      title: { type: String, default: "Session 2027 Admissions Open" },
      titleBn: { type: String, default: "২০২৭ শিক্ষাবর্ষে ভর্তি চলছে" },
      subtitle: { type: String, default: "Join Mirashani Academy for Classes Six to Nine" },
      subtitleBn: { type: String, default: "মিরাশানী একাডেমিতে ৬ষ্ঠ থেকে ৯ম শ্রেণিতে ভর্তির সুবর্ণ সুযোগ" },
      applicationFee: { type: String, default: "৳ 300" },
      applicationFeeBn: { type: String, default: "৩০০ টাকা" },
      examDate: { type: String, default: "10 December 2026 at 10:00 AM" },
      examDateBn: { type: String, default: "১০ ডিসেম্বর ২০২৬, সকাল ১০:০০" },
      examHall: { type: String, default: "MPA Main Campus - Room 204" },
      examHallBn: { type: String, default: "এমপিএ মূল ক্যাম্পাস - কক্ষ ২০৪" },
    },
  },
  {
    timestamps: true,
  }
);

const SchoolInfo = mongoose.model("SchoolInfo", schoolInfoSchema);

module.exports = SchoolInfo;
