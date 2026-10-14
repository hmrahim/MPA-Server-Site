const Teacher = require("../models/teacherModel");

const defaultTeachers = [
  {
    name: "Mr. Md. Abdul Jalil Mia",
    nameBn: "জনাব মো. আব্দুল জলিল মিয়া",
    designation: "Headmaster",
    designationBn: "প্রধান শিক্ষক",
    department: "Administration",
    qualification: "M.Sc (Physics), M.Ed (1st Class, DU)",
    experience: "22 Years Experience",
    experienceBn: "২২ বছরের অভিজ্ঞতা",
    email: "headmaster@mirashani.edu.bd",
    phone: "+880 1711-234567",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Dedicated to moral discipline, general secondary education excellence, and nurturing patriotic citizens.",
    bioBn: "নৈতিক শৃঙ্খলা, সাধারণ মাধ্যমিক শিক্ষায় উৎকর্ষ এবং দেশপ্রেমিক নাগরিক গঠনে নিবেদিত।",
    salary: 55000,
    assignedClass: "Class 10",
    subjects: ["Physics", "Moral Education"],
    order: 1,
  },
  {
    name: "Mrs. Shamsun Nahar Begum",
    nameBn: "মিসেস শামসুন নাহার বেগম",
    designation: "Assistant Headmistress",
    designationBn: "সহকারী প্রধান শিক্ষিকা",
    department: "Administration",
    qualification: "M.A. English (DU), B.Ed (First Class)",
    experience: "17 Years Experience",
    experienceBn: "১৭ বছরের অভিজ্ঞতা",
    email: "asst.head@mirashani.edu.bd",
    phone: "+880 1712-345678",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Focuses on communicative English, debate club mentorship, and girls' welfare and safety.",
    bioBn: "যোগাযোগমূলক ইংরেজি, বিতর্ক ক্লাব পরামর্শদাতা এবং মেয়েদের কল্যাণ ও নিরাপত্তায় মনোযোগী।",
    salary: 48000,
    assignedClass: "Class 9",
    subjects: ["English 1st Paper", "English 2nd Paper"],
    order: 2,
  },
  {
    name: "Mr. Jahangir Kabir",
    nameBn: "জনাব জাহাঙ্গীর কবির",
    designation: "Senior Teacher, Mathematics & Higher Math",
    designationBn: "সিনিয়র শিক্ষক, গণিত ও উচ্চতর গণিত",
    department: "Science",
    qualification: "M.Sc in Applied Mathematics (CU)",
    experience: "15 Years Experience",
    experienceBn: "১৫ বছরের অভিজ্ঞতা",
    email: "math.kabir@mirashani.edu.bd",
    phone: "+880 1713-456789",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Makes algebra, trigonometry, and geometry enjoyable through intuitive step-by-step problem solving.",
    bioBn: "স্বজ্ঞাত ধাপে ধাপে সমস্যা সমাধানের মাধ্যমে বীজগণিত, ত্রিকোণমিতি ও জ্যামিতি আনন্দময় করে তোলেন।",
    salary: 42000,
    assignedClass: "Class 10",
    subjects: ["General Mathematics", "Higher Mathematics"],
    order: 3,
  },
  {
    name: "Dr. Nusrat Jahan",
    nameBn: "ডা. নুসরাত জাহান",
    designation: "Senior Teacher, Physics & Chemistry",
    designationBn: "সিনিয়র শিক্ষিকা, পদার্থবিজ্ঞান ও রসায়ন",
    department: "Science",
    qualification: "Ph.D in Chemistry, M.Sc (RU)",
    experience: "13 Years Experience",
    experienceBn: "১৩ বছরের অভিজ্ঞতা",
    email: "science.nusrat@mirashani.edu.bd",
    phone: "+880 1715-678901",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Supervises secondary school laboratory experiments and leads students in national science fairs.",
    bioBn: "মাধ্যমিক বিদ্যালয়ের ল্যাবরেটরি পরীক্ষা তদারক করেন ও জাতীয় বিজ্ঞান মেলায় শিক্ষার্থীদের পরিচালনা করেন।",
    salary: 45000,
    assignedClass: "Class 9",
    subjects: ["Physics", "Chemistry"],
    order: 4,
  },
  {
    name: "Mr. Mahfuzur Rahman",
    nameBn: "জনাব মাহফুজুর রহমান",
    designation: "Senior Teacher, Business Studies & Accounting",
    designationBn: "সিনিয়র শিক্ষক, ব্যবসায় শিক্ষা ও হিসাববিজ্ঞান",
    department: "Commerce",
    qualification: "M.Com in Accounting, B.Ed",
    experience: "12 Years Experience",
    experienceBn: "১২ বছরের অভিজ্ঞতা",
    email: "commerce.mahfuz@mirashani.edu.bd",
    phone: "+880 1716-789012",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Teaches financial bookkeeping, business entrepreneurship, and commercial ethics for SSC Commerce.",
    bioBn: "এসএসসি বাণিজ্যের জন্য আর্থিক হিসাবরক্ষণ, ব্যবসায় উদ্যোগ ও বাণিজ্যিক নৈতিকতা শেখান।",
    salary: 40000,
    assignedClass: "Class 9",
    subjects: ["Accounting", "Finance & Banking", "Business Entrepreneurship"],
    order: 5,
  },
  {
    name: "Mrs. Fahmida Yasmin",
    nameBn: "মিসেস ফাহমিদা ইয়াসমিন",
    designation: "Senior Teacher, English Literature",
    designationBn: "সিনিয়র শিক্ষিকা, ইংরেজি সাহিত্য",
    department: "Languages",
    qualification: "B.A. (Hons), M.A. in English (JU)",
    experience: "8 Years Experience",
    experienceBn: "৮ বছরের অভিজ্ঞতা",
    email: "english.fahmida@mirashani.edu.bd",
    phone: "+880 1718-901234",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Inspires creative writing, spelling tournaments, and confident English conversational fluency.",
    bioBn: "সৃজনশীল লেখা, বানান প্রতিযোগিতা ও আত্মবিশ্বাসী ইংরেজি কথোপকথনের দক্ষতায় অনুপ্রেরণা দেন।",
    salary: 38000,
    assignedClass: "Class 8",
    subjects: ["English Grammar", "Literature"],
    order: 6,
  },
  {
    name: "Mr. Tanvir Hasan",
    nameBn: "জনাব তানভীর হাসান",
    designation: "Senior Teacher, ICT & Digital Literacy",
    designationBn: "সিনিয়র শিক্ষক, আইসিটি ও ডিজিটাল সাক্ষরতা",
    department: "ICT & STEM",
    qualification: "B.Sc in Computer Science & Engineering",
    experience: "7 Years Experience",
    experienceBn: "৭ বছরের অভিজ্ঞতা",
    email: "ict.tanvir@mirashani.edu.bd",
    phone: "+880 1714-567890",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    bio: "Instructs multimedia presentation, touch typing, web research basics, and cyber safety for high school.",
    bioBn: "মাল্টিমিডিয়া প্রেজেন্টেশন, টাচ টাইপিং, ওয়েব গবেষণার মূলনীতি ও সাইবার নিরাপত্তা শেখান।",
    salary: 39000,
    assignedClass: "Class 7",
    subjects: ["Information & Communication Technology (ICT)"],
    order: 7,
  },
  {
    name: "Mr. Kazi Mizanur Rahman",
    nameBn: "জনাব কাজী মিজানুর রহমান",
    designation: "Senior Teacher, Bangladesh & Global Studies",
    designationBn: "সিনিয়র শিক্ষক, বাংলাদেশ ও বৈশ্বিক অধ্যয়ন (ইতিহাস ও পৌরনীতি)",
    department: "Humanities",
    qualification: "M.A. in History, B.Ed (1st Class)",
    experience: "14 Years Experience",
    experienceBn: "১৪ বছরের অভিজ্ঞতা",
    email: "history.kazi@mirashani.edu.bd",
    phone: "+880 1717-890123",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Passionate about Bangladesh Liberation War history, civics, democratic values, and global geography.",
    bioBn: "বাংলাদেশের মুক্তিযুদ্ধের ইতিহাস, নাগরিক অধিকার, গণতান্ত্রিক মূল্যবোধ ও বৈশ্বিক ভূগোলে উৎসাহী।",
    salary: 41000,
    assignedClass: "Class 8",
    subjects: ["Bangladesh & Global Studies", "History & Civics"],
    order: 8,
  },
];

// GET All Teachers
exports.getTeachers = async (req, res) => {
  try {
    let teachers = await Teacher.find().sort({ order: 1, createdAt: 1 });
    if (!teachers || teachers.length === 0) {
      teachers = await Teacher.insertMany(defaultTeachers);
    }
    res.json({ success: true, count: teachers.length, data: teachers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Teacher
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }
    res.json({ success: true, data: teacher });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST Create Teacher
exports.createTeacher = async (req, res) => {
  try {
    const count = await Teacher.countDocuments();
    const newTeacher = new Teacher({
      ...req.body,
      order: req.body.order !== undefined ? req.body.order : count + 1,
    });
    const saved = await newTeacher.save();
    res.status(201).json({ success: true, data: saved, message: "Teacher created successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// PUT Update Teacher
exports.updateTeacher = async (req, res) => {
  try {
    const updated = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }
    res.json({ success: true, data: updated, message: "Teacher updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE Teacher
exports.deleteTeacher = async (req, res) => {
  try {
    const deleted = await Teacher.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Teacher not found" });
    }
    res.json({ success: true, message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// RESET / SEED
exports.resetTeachers = async (req, res) => {
  try {
    await Teacher.deleteMany({});
    const seeded = await Teacher.insertMany(defaultTeachers);
    res.json({ success: true, count: seeded.length, data: seeded, message: "Default teachers restored" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
