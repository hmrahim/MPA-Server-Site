const AcademicGroupSection = require("../models/academicGroupModel");

const defaultGroups = [
  {
    id: "group-science",
    icon: "🔬",
    name: "Science Group (বিজ্ঞান বিভাগ)",
    nameBn: "বিজ্ঞান বিভাগ",
    desc: "Rigorous national curriculum in Physics, Chemistry, Biology, and Higher Mathematics supported by daily hands-on laboratory sessions. Ideal for future doctors, engineers, and scientists.",
    descBn: "পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং উচ্চতর গণিতের গভীর পাঠ ও নিয়মিত ব্যবহারিক ল্যাব ক্লাস। ভবিষ্যৎ প্রকৌশলী, চিকিৎসক ও বিজ্ঞানী গড়ার আদর্শ বিভাগ।",
    subjects: ["Physics", "Chemistry", "Biology", "Higher Math", "General Math", "ICT"],
    subjectsBn: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "উচ্চতর গণিত", "সাধারণ গণিত", "আইসিটি"],
    pathway: "HSC Science, Medical (MBBS), Engineering (BUET), Technology & Research",
    pathwayBn: "উচ্চ মাধ্যমিক (বিজ্ঞান), মেডিকেল (MBBS), বুয়েট/প্রকৌশল বিশ্ববিদ্যালয় ও বৈজ্ঞানিক গবেষণা",
    border: "border-cyan-500/30",
    color: "from-blue-500/20 to-cyan-500/20",
    buttonText: "Curriculum Details",
    buttonTextBn: "পাঠ্যক্রমের বিবরণ",
    buttonLink: "/academics",
    badge: "Popular",
    badgeBn: "জনপ্রিয়",
    order: 1,
    isActive: true,
  },
  {
    id: "group-commerce",
    icon: "📊",
    name: "Business Studies (ব্যবসায় শিক্ষা)",
    nameBn: "ব্যবসায় শিক্ষা বিভাগ",
    desc: "Accounting, Business Entrepreneurship, and Finance & Banking. Developing analytical thinking, commercial acumen, financial management, and leadership skills.",
    descBn: "হিসাববিজ্ঞান, ব্যবসায় উদ্যোগ এবং ফিন্যান্স ও ব্যাংকিং। শিক্ষার্থীদের ব্যবসায়িক দূরদর্শিতা, আর্থিক হিসাব ও ব্যবস্থাপনা দক্ষতা বৃদ্ধি করে।",
    subjects: ["Accounting", "Business Ent.", "Finance & Banking", "General Science", "General Math"],
    subjectsBn: ["হিসাববিজ্ঞান", "ব্যবসায় উদ্যোগ", "ফিন্যান্স ও ব্যাংকিং", "সাধারণ বিজ্ঞান", "গণিত"],
    pathway: "HSC Commerce, BBA/MBA (IBA), Chartered Accountancy (CA), Corporate Finance",
    pathwayBn: "উচ্চ মাধ্যমিক (ব্যবসায় শিক্ষা), বিবিএ (IBA/DU), চার্টার্ড একাউন্টেন্সি (CA) ও করপোরেট ব্যবস্থাপনা",
    border: "border-amber-500/30",
    color: "from-amber-500/20 to-orange-500/20",
    buttonText: "Curriculum Details",
    buttonTextBn: "পাঠ্যক্রমের বিবরণ",
    buttonLink: "/academics",
    badge: "Commerce",
    badgeBn: "বাণিজ্য",
    order: 2,
    isActive: true,
  },
  {
    id: "group-humanities",
    icon: "📜",
    name: "Humanities (মানবিক বিভাগ)",
    nameBn: "মানবিক বিভাগ",
    desc: "History, Geography & Environment, Civics, Economics, and Social Science. Cultivating social responsibility, ethical leadership, legal insight, and public policy understanding.",
    descBn: "বাংলাদেশ ও বিশ্বসভ্যতার ইতিহাস, ভূগোল ও পরিবেশ, পৌরনীতি ও নাগরিকতা এবং অর্থনীতি। সামাজিক সচেতনতা, আইন ও প্রশাসনিক দক্ষতা গড়ে তোলে।",
    subjects: ["History & Civ.", "Geography", "Civics & Citizen.", "Economics", "General Science"],
    subjectsBn: ["ইতিহাস ও বিশ্বসভ্যতা", "ভূগোল ও পরিবেশ", "পৌরনীতি ও নাগরিকতা", "অর্থনীতি", "আইসিটি"],
    pathway: "HSC Humanities, Law (LLB), Civil Services (BCS), Journalism & Public Policy",
    pathwayBn: "উচ্চ মাধ্যমিক (মানবিক), আইন (LLB), বিসিএস/প্রশাসনিক ক্যাডার, সাংবাদিকতা ও আন্তর্জাতিক সম্পর্ক",
    border: "border-emerald-500/30",
    color: "from-emerald-500/20 to-teal-500/20",
    buttonText: "Curriculum Details",
    buttonTextBn: "পাঠ্যক্রমের বিবরণ",
    buttonLink: "/academics",
    badge: "Arts",
    badgeBn: "মানবিক",
    order: 3,
    isActive: true,
  },
  {
    id: "group-junior",
    icon: "📚",
    name: "Junior Section (৬ষ্ঠ - ৮ম শ্রেণি)",
    nameBn: "জুনিয়র সেকশন (৬ষ্ঠ - ৮ম শ্রেণি)",
    desc: "Bangla grammar, conversational English, general mathematics, integrated science, and ICT. Establishing a strong intellectual and moral foundation for secondary education.",
    descBn: "বাংলা ব্যাকরণ ও সাহিত্য, ইংরেজি কথোপকথন, সাধারণ গণিত, সমন্বিত বিজ্ঞান এবং তথ্য ও যোগাযোগ প্রযুক্তির মজবুত ভিত্তি।",
    subjects: ["Bangla", "English", "Mathematics", "General Science", "BGS", "Religion"],
    subjectsBn: ["বাংলা (১ম ও ২য়)", "ইংরেজি গ্রামার", "গণিত", "সাধারণ বিজ্ঞান", "বিজিএস", "ধর্ম"],
    pathway: "High grade foundation for SSC Science, Commerce or Humanities stream entry",
    pathwayBn: "৯ম শ্রেণিতে বিজ্ঞান, বাণিজ্য বা মানবিক বিভাগে উত্তীর্ণ হওয়ার দৃঢ় একাডেমিক ভিত্তি",
    border: "border-purple-500/30",
    color: "from-purple-500/20 to-pink-500/20",
    buttonText: "Curriculum Details",
    buttonTextBn: "পাঠ্যক্রমের বিবরণ",
    buttonLink: "/academics",
    badge: "Foundation",
    badgeBn: "ভিত্তি",
    order: 4,
    isActive: true,
  },
];

const defaultSectionData = {
  isActive: true,
  tag: "General Secondary Curriculum (Classes 6 to 10)",
  tagBn: "সাধারণ মাধ্যমিক শিক্ষাক্রম (৬ষ্ঠ হতে ১০ম)",
  title: "Academic Groups & Disciplines",
  titleBn: "একাডেমিক বিভাগ ও পাঠ্য বিষয়সমূহ",
  subtitle:
    "Our secondary curriculum prepares general students comprehensively for the Secondary School Certificate (SSC) board examinations.",
  subtitleBn:
    "জাতীয় শিক্ষাক্রম পাঠ্যপুস্তক বোর্ড অনুমোদিত সাধারণ মাধ্যমিক শিক্ষাক্রম (এসএসসি) অনুযায়ী পাঠদান নিশ্চিত করে প্রতিটি শিক্ষার্থীর মেধা বিকাশ।",
  keySubjectsLabel: "Key Subjects",
  keySubjectsLabelBn: "মূল বিষয়সমূহ",
  pathwayLabel: "Career Pathway:",
  pathwayLabelBn: "ভবিষ্যৎ ক্যারিয়ার:",
  groups: defaultGroups,
};

const AcademicGroupController = {
  // GET /api/academic-groups
  getAcademicGroups: async (req, res) => {
    try {
      let doc = await AcademicGroupSection.findOne();
      if (!doc) {
        doc = await AcademicGroupSection.create(defaultSectionData);
      } else if (!doc.groups || doc.groups.length === 0) {
        doc.groups = defaultGroups;
        await doc.save();
      }
      res.status(200).json({ success: true, data: doc });
    } catch (error) {
      console.error("[AcademicGroups] GET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/academic-groups (Update whole section & groups)
  updateAcademicGroups: async (req, res) => {
    try {
      let doc = await AcademicGroupSection.findOne();
      if (!doc) {
        doc = new AcademicGroupSection(defaultSectionData);
      }

      const updatableFields = [
        "isActive",
        "tag",
        "tagBn",
        "title",
        "titleBn",
        "subtitle",
        "subtitleBn",
        "keySubjectsLabel",
        "keySubjectsLabelBn",
        "pathwayLabel",
        "pathwayLabelBn",
        "groups",
      ];

      updatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          doc[field] = req.body[field];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Academic Groups section updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[AcademicGroups] PUT error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/academic-groups/group (Add single new group)
  addGroup: async (req, res) => {
    try {
      let doc = await AcademicGroupSection.findOne();
      if (!doc) {
        doc = await AcademicGroupSection.create(defaultSectionData);
      }

      const newGroup = {
        id: req.body.id || `group-${Date.now()}`,
        icon: req.body.icon || "📘",
        name: req.body.name || "New Academic Group",
        nameBn: req.body.nameBn || "নতুন একাডেমিক বিভাগ",
        desc: req.body.desc || "",
        descBn: req.body.descBn || "",
        subjects: Array.isArray(req.body.subjects) ? req.body.subjects : [],
        subjectsBn: Array.isArray(req.body.subjectsBn) ? req.body.subjectsBn : [],
        pathway: req.body.pathway || "",
        pathwayBn: req.body.pathwayBn || "",
        border: req.body.border || "border-cyan-500/30",
        color: req.body.color || "from-blue-500/20 to-cyan-500/20",
        buttonText: req.body.buttonText || "Curriculum Details",
        buttonTextBn: req.body.buttonTextBn || "পাঠ্যক্রমের বিবরণ",
        buttonLink: req.body.buttonLink || "/academics",
        badge: req.body.badge || "",
        badgeBn: req.body.badgeBn || "",
        order: doc.groups.length + 1,
        isActive: req.body.isActive !== false,
      };

      doc.groups.push(newGroup);
      await doc.save();

      res.status(201).json({
        success: true,
        message: "Academic group added successfully",
        data: doc,
      });
    } catch (error) {
      console.error("[AcademicGroups] Add group error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/academic-groups/group/:id (Update single group)
  updateGroup: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await AcademicGroupSection.findOne();
      if (!doc) {
        return res.status(404).json({ success: false, message: "Academic groups not found" });
      }

      const index = doc.groups.findIndex((g) => g.id === id || String(g._id) === id);
      if (index === -1) {
        return res.status(404).json({ success: false, message: "Group item not found" });
      }

      const current = doc.groups[index].toObject();
      const updatedItem = { ...current, ...req.body };
      doc.groups[index] = updatedItem;

      await doc.save();
      res.status(200).json({
        success: true,
        message: "Academic group updated successfully",
        data: doc,
      });
    } catch (error) {
      console.error("[AcademicGroups] Update group error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE /api/academic-groups/group/:id
  deleteGroup: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await AcademicGroupSection.findOne();
      if (!doc) {
        return res.status(404).json({ success: false, message: "Academic groups not found" });
      }

      doc.groups = doc.groups.filter((g) => g.id !== id && String(g._id) !== id);
      await doc.save();

      res.status(200).json({
        success: true,
        message: "Academic group deleted successfully",
        data: doc,
      });
    } catch (error) {
      console.error("[AcademicGroups] Delete group error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/academic-groups/reset
  resetAcademicGroups: async (req, res) => {
    try {
      let doc = await AcademicGroupSection.findOne();
      if (doc) {
        await AcademicGroupSection.deleteOne({ _id: doc._id });
      }
      doc = await AcademicGroupSection.create(defaultSectionData);

      res.status(200).json({
        success: true,
        message: "Academic Groups reset to default successfully",
        data: doc,
      });
    } catch (error) {
      console.error("[AcademicGroups] Reset error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = AcademicGroupController;
