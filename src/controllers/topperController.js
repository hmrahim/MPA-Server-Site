const Topper = require("../models/topperModel");

const defaultToppers = [
  // Class Six
  { className: "Six", name: "রাফি আহমেদ", nameEn: "Rafi Ahmed", roll: "1", gpa: "৫.০০", gpaEn: "5.00", marks: "৬৭৫/৭০০", marksEn: "675/700", photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80", badge: "১ম স্থান (গোল্ডেন এ+)", badgeEn: "1st in Class (Golden A+)", order: 1 },
  { className: "Six", name: "তানহা আক্তার", nameEn: "Tanha Akter", roll: "2", gpa: "৫.০০", gpaEn: "5.00", marks: "৬৬৮/৭০০", marksEn: "668/700", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", badge: "২য় স্থান (গোল্ডেন এ+)", badgeEn: "2nd in Class (Golden A+)", order: 2 },
  { className: "Six", name: "সাব্বির হোসেন", nameEn: "Sabbir Hossain", roll: "3", gpa: "৪.৯৫", gpaEn: "4.95", marks: "৬৫২/৭০০", marksEn: "652/700", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80", badge: "৩য় স্থান", badgeEn: "3rd in Class", order: 3 },
  { className: "Six", name: "মিম চৌধুরী", nameEn: "Mim Chowdhury", roll: "4", gpa: "৪.৯০", gpaEn: "4.90", marks: "৬৪৪/৭০০", marksEn: "644/700", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", badge: "শীর্ষ ১০", badgeEn: "Top 10", order: 4 },
  { className: "Six", name: "আরিফ ইসলাম", nameEn: "Arif Islam", roll: "5", gpa: "৪.৮৮", gpaEn: "4.88", marks: "৬৩৬/৭০০", marksEn: "636/700", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", badge: "শীর্ষ ১০", badgeEn: "Top 10", order: 5 },

  // Class Seven
  { className: "Seven", name: "নাবিলা করিম", nameEn: "Nabila Karim", roll: "1", gpa: "৫.০০", gpaEn: "5.00", marks: "৬৮২/৭০০", marksEn: "682/700", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", badge: "১ম স্থান (গোল্ডেন এ+)", badgeEn: "1st in Class (Golden A+)", order: 1 },
  { className: "Seven", name: "ইমরান হোসেন", nameEn: "Imran Hossain", roll: "2", gpa: "৫.০০", gpaEn: "5.00", marks: "৬৭৪/৭০০", marksEn: "674/700", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", badge: "২য় স্থান (গোল্ডেন এ+)", badgeEn: "2nd in Class (Golden A+)", order: 2 },
  { className: "Seven", name: "সুমাইয়া আক্তার", nameEn: "Sumaiya Akter", roll: "3", gpa: "৪.৯৫", gpaEn: "4.95", marks: "৬৬০/৭০০", marksEn: "660/700", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", badge: "৩য় স্থান", badgeEn: "3rd in Class", order: 3 },

  // Class Eight
  { className: "Eight", name: "ফারহান সাদিক", nameEn: "Farhan Sadik", roll: "1", gpa: "৫.০০", gpaEn: "5.00", marks: "৬৮৮/৭০০", marksEn: "688/700", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80", badge: "১ম স্থান (ট্যালেন্টপুল)", badgeEn: "1st in Class (Talentpool)", order: 1 },
  { className: "Eight", name: "আনিকা তাবাস্সুম", nameEn: "Anika Tabassum", roll: "2", gpa: "৫.০০", gpaEn: "5.00", marks: "৬৮০/৭০০", marksEn: "680/700", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", badge: "২য় স্থান (গোল্ডেন এ+)", badgeEn: "2nd in Class (Golden A+)", order: 2 },
  { className: "Eight", name: "জুবায়ের আলী", nameEn: "Zubayer Ali", roll: "3", gpa: "৪.৯৫", gpaEn: "4.95", marks: "৬৬৮/৭০০", marksEn: "668/700", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", badge: "৩য় স্থান", badgeEn: "3rd in Class", order: 3 },

  // Class Nine
  { className: "Nine", name: "সামিউল হক", nameEn: "Samiul Haque", roll: "1", gpa: "৫.০০", gpaEn: "5.00", marks: "৮৮৫/৯০০", marksEn: "885/900", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", badge: "বিজ্ঞানে ১ম (গোল্ডেন এ+)", badgeEn: "1st in Science (Golden A+)", order: 1 },
  { className: "Nine", name: "তাসনিম আরা", nameEn: "Tasnim Ara", roll: "2", gpa: "৫.০০", gpaEn: "5.00", marks: "৮৭৮/৯০০", marksEn: "878/900", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", badge: "বিজ্ঞানে ২য় (গোল্ডেন এ+)", badgeEn: "2nd in Science (Golden A+)", order: 2 },
  { className: "Nine", name: "মেহেদী হাসান", nameEn: "Mehedi Hasan", roll: "3", gpa: "৪.৯৫", gpaEn: "4.95", marks: "৮৬৪/৯০০", marksEn: "864/900", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80", badge: "বাণিজ্যে ১ম", badgeEn: "1st in Commerce", order: 3 },

  // Class Ten
  { className: "Ten", name: "আয়েশা সিদ্দিকা", nameEn: "Ayesha Siddika", roll: "1", gpa: "৫.০০", gpaEn: "5.00", marks: "৮৯২/৯০০", marksEn: "892/900", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", badge: "বিজ্ঞানে ১ম (গোল্ডেন এ+)", badgeEn: "1st in Science (Golden A+)", order: 1 },
  { className: "Ten", name: "রাহাত করিম", nameEn: "Rahat Karim", roll: "2", gpa: "৫.০০", gpaEn: "5.00", marks: "৮৮৬/৯০০", marksEn: "886/900", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80", badge: "বিজ্ঞানে ২য় (গোল্ডেন এ+)", badgeEn: "2nd in Science (Golden A+)", order: 2 },
  { className: "Ten", name: "নাফিসা আনজুম", nameEn: "Nafisa Anjum", roll: "3", gpa: "৫.০০", gpaEn: "5.00", marks: "৮৭৮/৯০০", marksEn: "878/900", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", badge: "ব্যবসায় শিক্ষায় ১ম", badgeEn: "1st in Business Studies", order: 3 },
  { className: "Ten", name: "তওহিদ ইসলাম", nameEn: "Tawhid Islam", roll: "4", gpa: "৪.৯৫", gpaEn: "4.95", marks: "৮৬৫/৯০০", marksEn: "865/900", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", badge: "মানবিকে ১ম", badgeEn: "1st in Humanities", order: 4 },
  { className: "Ten", name: "সিনথিয়া শারমিন", nameEn: "Sinthia Sharmin", roll: "5", gpa: "৪.৯০", gpaEn: "4.90", marks: "৮৫৪/৯০০", marksEn: "854/900", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", badge: "শীর্ষ ১০", badgeEn: "Top 10", order: 5 },
];

// GET All Toppers (optional ?className=Ten)
exports.getToppers = async (req, res) => {
  try {
    const filter = {};
    if (req.query.className) {
      filter.className = req.query.className;
    }
    let toppers = await Topper.find(filter).sort({ className: 1, order: 1, createdAt: 1 });
    if (!toppers || toppers.length === 0) {
      toppers = await Topper.insertMany(defaultToppers);
      if (req.query.className) {
        toppers = toppers.filter((t) => t.className === req.query.className);
      }
    }
    res.json({ success: true, count: toppers.length, data: toppers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Topper By ID
exports.getTopperById = async (req, res) => {
  try {
    const topper = await Topper.findById(req.params.id);
    if (!topper) {
      return res.status(404).json({ success: false, message: "Topper not found" });
    }
    res.json({ success: true, data: topper });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST Create Topper
exports.createTopper = async (req, res) => {
  try {
    const count = await Topper.countDocuments({ className: req.body.className });
    const newTopper = new Topper({
      ...req.body,
      order: req.body.order !== undefined ? req.body.order : count + 1,
    });
    const saved = await newTopper.save();
    res.status(201).json({ success: true, data: saved, message: "Topper added successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// PUT Update Topper
exports.updateTopper = async (req, res) => {
  try {
    const updated = await Topper.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Topper not found" });
    }
    res.json({ success: true, data: updated, message: "Topper updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE Topper
exports.deleteTopper = async (req, res) => {
  try {
    const deleted = await Topper.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Topper not found" });
    }
    res.json({ success: true, message: "Topper deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// RESET Toppers
exports.resetToppers = async (req, res) => {
  try {
    await Topper.deleteMany({});
    const seeded = await Topper.insertMany(defaultToppers);
    res.json({ success: true, count: seeded.length, data: seeded, message: "Default toppers restored" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
