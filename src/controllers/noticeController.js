const NoticeSection = require("../models/noticeModel");

const defaultNotices = [
  {
    id: "notice-1",
    cat: "Exam",
    catBn: "পরীক্ষা",
    pinned: true,
    date: "25 Sep 2026",
    dateBn: "২৫ সেপ্টেম্বর ২০২৬",
    title: "Half-Yearly Examination 2026 Routine & Admit Card Distribution",
    titleBn: "অর্ধ-বার্ষিক পরীক্ষা ২০২৬ রুটিন ও প্রবেশপত্র বিতরণ",
    text: "Examinations for Classes Six to Ten commence on 10 October 2026. The comprehensive subject schedule is available for download. All tuition dues must be cleared before receiving official admit cards.",
    textBn: "৬ষ্ঠ থেকে ১০ম শ্রেণির পরীক্ষা ১০ অক্টোবর ২০২৬ থেকে শুরু হবে। বিস্তারিত সময়সূচি ডাউনলোড করা যাবে। প্রবেশপত্র পেতে সব বেতন পরিশোধ করতে হবে।",
    author: "Exam Controller Desk",
    authorBn: "পরীক্ষা নিয়ন্ত্রক",
    memoNo: "MA/EXAM/2026/089",
    file: "#",
    views: 620,
    order: 1,
    isActive: true,
  },
  {
    id: "notice-2",
    cat: "Admission",
    catBn: "ভর্তি",
    pinned: true,
    date: "20 Sep 2026",
    dateBn: "২০ সেপ্টেম্বর ২০২৬",
    title: "Admission Circular Session 2027 (Classes 6 to 9)",
    titleBn: "সেশন ২০২৭ ভর্তি বিজ্ঞপ্তি (৬ষ্ঠ থেকে ৯ম শ্রেণি)",
    text: "Online and in-person admission registration opens from 01 November 2026. Seats are available for Science, Business Studies, and Humanities streams in Class 9.",
    textBn: "১ নভেম্বর ২০২৬ থেকে অনলাইন ও অফলাইন ভর্তি আবেদন শুরু। ৯ম শ্রেণিতে বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক বিভাগে ভর্তি নেওয়া হবে।",
    author: "Admission Committee",
    authorBn: "ভর্তি কমিটি",
    memoNo: "MA/ADM/2026/112",
    file: "#",
    views: 1140,
    order: 2,
    isActive: true,
  },
  {
    id: "notice-3",
    cat: "Holiday",
    catBn: "ছুটি",
    pinned: false,
    date: "22 Sep 2026",
    dateBn: "২২ সেপ্টেম্বর ২০২৬",
    title: "School Closure on National Public Holiday",
    titleBn: "জাতীয় সরকারি ছুটিতে বৃহস্পতিবার বিদ্যালয় বন্ধ",
    text: "Academic classes and administrative offices will remain closed tomorrow in observance of the declared government holiday. Regular classes resume Sunday at 08:30 AM.",
    textBn: "সকল একাডেমিক ক্লাস ও প্রশাসনিক কার্যালয় বন্ধ থাকবে। রবিবার সকাল ৮:৩০টায় স্বাভাবিক ক্লাস শুরু হবে।",
    author: "Headmaster Office",
    authorBn: "প্রধান শিক্ষকের দপ্তর",
    memoNo: "MA/ADMIN/2026/045",
    file: "#",
    views: 410,
    order: 3,
    isActive: true,
  },
  {
    id: "notice-4",
    cat: "Result",
    catBn: "ফলাফল",
    pinned: false,
    date: "15 Sep 2026",
    dateBn: "১৫ সেপ্টেম্বর ২০২৬",
    title: "Class 10 Model Test / Pre-Test Results Published",
    titleBn: "১০ম শ্রেণির প্রাক-পরীক্ষা / মডেল টেস্টের ফলাফল প্রকাশিত",
    text: "Official results for SSC candidate model test examinations are now published on the school portal. Guardians are requested to review performance sheets with respective class mentors.",
    textBn: "এসএসসি পরীক্ষার্থীদের মডেল টেস্টের ফলাফল অনলাইন পোর্টালে প্রকাশিত হয়েছে। অভিভাবকদের সংশ্লিষ্ট শ্রেণিশিক্ষকের সাথে ফলাফল পর্যালোচনার অনুরোধ করা হচ্ছে।",
    author: "Academic Council",
    authorBn: "একাডেমিক পরিষদ",
    memoNo: "MA/RES/2026/077",
    file: "#",
    views: 1480,
    order: 4,
    isActive: true,
  },
  {
    id: "notice-5",
    cat: "Club",
    catBn: "ক্লাব",
    pinned: false,
    date: "12 Sep 2026",
    dateBn: "১২ সেপ্টেম্বর ২০২৬",
    title: "Annual Science Fair & Math Olympiad Registration",
    titleBn: "বার্ষিক বিজ্ঞান মেলা ও আন্তঃশ্রেণি গণিত অলিম্পিয়াডে নিবন্ধন",
    text: "Students across Classes 6 to 10 are invited to submit working physics/chemistry project models and enroll for the intra-school mathematics olympiad.",
    textBn: "৬ষ্ঠ থেকে ১০ম শ্রেণির শিক্ষার্থীরা কার্যকরী পদার্থ/রসায়ন প্রজেক্ট মডেল জমা দিতে ও গণিত অলিম্পিয়াডে নিবন্ধন করতে পারবে।",
    author: "Science & Math Club",
    authorBn: "বিজ্ঞান ও গণিত ক্লাব",
    memoNo: "MA/CLUB/2026/019",
    file: "#",
    views: 790,
    order: 5,
    isActive: true,
  },
  {
    id: "notice-6",
    cat: "Scouts",
    catBn: "স্কাউট",
    pinned: false,
    date: "08 Sep 2026",
    dateBn: "০৮ সেপ্টেম্বর ২০২৬",
    title: "Bangladesh Scouts & Girl Guides Annual Campfire Camp",
    titleBn: "বাংলাদেশ স্কাউট ও গার্ল গাইড বার্ষিক ক্যাম্পফায়ার ও প্রশিক্ষণ শিবির",
    text: "Registered school scouts and girl guide unit members will participate in a 3-day outdoor development camp from next Friday.",
    textBn: "স্কুলের স্কাউট দল ও গার্ল গাইডের নিবন্ধিত সদস্যরা ৩ দিনের আঞ্চলিক প্রশিক্ষণ শিবিরে অংশগ্রহণ করবে।",
    author: "Scout Troop Leader",
    authorBn: "স্কাউট দলনেতা",
    memoNo: "MA/SCOUT/2026/005",
    file: "#",
    views: 520,
    order: 6,
    isActive: true,
  },
];

const defaultPadConfig = {
  schoolName: "MIRASHANI ACADEMY",
  schoolNameBn: "মিরাশানী একাডেমি",
  subHeader: "Affiliated with Board of Intermediate & Secondary Education | General Secondary High School",
  subHeaderBn: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড অনুমোদিত সাধারণ মাধ্যমিক উচ্চ বিদ্যালয়",
  address: "Mirashani, Post Office: Mirashani, Upazila: Nasirnagar, District: Brahmanbaria",
  addressBn: "গ্রাম: মিরাশানী, ডাকঘর: মিরাশানী, উপজেলা: নাসিরনগর, জেলা: ব্রাহ্মণবাড়িয়া",
  phone: "+880 1712-345678, +880 1812-345678",
  email: "info@mirashaniacademy.edu.bd",
  website: "www.mirashaniacademy.edu.bd",
  eiin: "108123",
  estd: "1995",
  schoolCode: "3450",
  logoText: "MA",
  logoUrl: "",
  watermarkText: "MIRASHANI ACADEMY",
  signatoryTitle: "Headmaster / Principal",
  signatoryTitleBn: "প্রধান শিক্ষক / অধ্যক্ষ",
  signatoryName: "Al-Hajj Md. Sirajul Islam",
  signatoryNameBn: "আলহাজ্ব মো: সিরাজুল ইসলাম",
  signatureUrl: "",
  sealUrl: "",
};

const defaultSmsAlert = {
  isActive: true,
  title: "Get Instant Notices via SMS Alert",
  titleBn: "এসএমএস অ্যালার্টের মাধ্যমে নোটিশ পান",
  subtitle: "Guardians can subscribe their mobile number to receive exam schedules and emergency school closures directly.",
  subtitleBn: "অভিভাবকগণ মোবাইল নম্বর নিবন্ধন করে সরাসরি পরীক্ষার রুটিন ও জরুরি ছুটির বার্তা পেতে পারেন।",
  inputPlaceholder: "e.g. 017XXXXXXXX",
  inputPlaceholderBn: "যেমন: ০১৭XXXXXXXX",
  buttonText: "Subscribe Free",
  buttonTextBn: "বিনামূল্যে সাবস্ক্রাইব",
  successMsg: "Thank you! Your mobile number has been registered for notice alerts.",
  successMsgBn: "ধন্যবাদ! আপনার মোবাইল নম্বর নোটিশ অ্যালার্টের জন্য নিবন্ধিত হয়েছে।",
};

const defaultNoticeSectionData = {
  isActive: true,
  tag: "Notice Board",
  tagBn: "অফিসিয়াল নোটিশ বোর্ড",
  title: "School Circulars & Notice Board",
  titleBn: "বিদ্যালয় নোটিশ বোর্ড",
  subtitle:
    "Stay updated with academic examination routines, holiday declarations, admission circulars, and official announcements.",
  subtitleBn:
    "মিরাশানী একাডেমি প্রশাসন কর্তৃক প্রকাশিত সকল একাডেমিক পরীক্ষার রুটিন, ছুটির ঘোষণা, ভর্তি সার্কুলার এবং গুরুত্বপূর্ণ নোটিশ এক নজরে দেখুন।",
  padConfig: defaultPadConfig,
  smsAlert: defaultSmsAlert,
  notices: defaultNotices,
};

const NoticeController = {
  // GET /api/notices
  getNotices: async (req, res) => {
    try {
      let doc = await NoticeSection.findOne();
      if (!doc) {
        doc = await NoticeSection.create(defaultNoticeSectionData);
      } else {
        let changed = false;
        if (!doc.notices || doc.notices.length === 0) {
          doc.notices = defaultNotices;
          changed = true;
        }
        if (!doc.padConfig || !doc.padConfig.schoolName) {
          doc.padConfig = defaultPadConfig;
          changed = true;
        }
        if (!doc.smsAlert || !doc.smsAlert.title) {
          doc.smsAlert = defaultSmsAlert;
          changed = true;
        }
        if (changed) await doc.save();
      }
      res.status(200).json({ success: true, data: doc });
    } catch (error) {
      console.error("[Notices] GET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/notices (Update section headers, smsAlert & notices array)
  updateNotices: async (req, res) => {
    try {
      let doc = await NoticeSection.findOne();
      if (!doc) {
        doc = new NoticeSection(defaultNoticeSectionData);
      }

      const updatableFields = [
        "isActive",
        "tag",
        "tagBn",
        "title",
        "titleBn",
        "subtitle",
        "subtitleBn",
        "padConfig",
        "smsAlert",
        "notices",
      ];

      updatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          doc[field] = req.body[field];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Notice Board updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Notices] UPDATE error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/notices/pad-config (Update only school pad configuration)
  updatePadConfig: async (req, res) => {
    try {
      let doc = await NoticeSection.findOne();
      if (!doc) {
        doc = new NoticeSection(defaultNoticeSectionData);
      }

      doc.padConfig = { ...doc.padConfig?.toObject(), ...req.body };
      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Official School Letterhead Pad updated successfully",
        data: updated.padConfig,
      });
    } catch (error) {
      console.error("[Notices] UPDATE PAD CONFIG error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/notices/item (Add a single notice)
  addItem: async (req, res) => {
    try {
      let doc = await NoticeSection.findOne();
      if (!doc) {
        doc = new NoticeSection(defaultNoticeSectionData);
      }

      const newItem = {
        id: req.body.id || `notice-${Date.now()}`,
        cat: req.body.cat || "Exam",
        catBn: req.body.catBn || "পরীক্ষা",
        pinned: req.body.pinned || false,
        date: req.body.date || "Today",
        dateBn: req.body.dateBn || "আজ",
        title: req.body.title || "New Announcement",
        titleBn: req.body.titleBn || "নতুন নোটিশ",
        text: req.body.text || "",
        textBn: req.body.textBn || "",
        author: req.body.author || "Principal Office",
        authorBn: req.body.authorBn || "প্রধান শিক্ষক",
        memoNo: req.body.memoNo || `MA/NOTICE/${new Date().getFullYear()}/${Math.floor(100 + Math.random() * 900)}`,
        file: req.body.file || "#",
        views: req.body.views || 0,
        order:
          req.body.order !== undefined
            ? req.body.order
            : (doc.notices ? doc.notices.length + 1 : 1),
        isActive: req.body.isActive !== undefined ? req.body.isActive : true,
      };

      doc.notices.unshift(newItem);
      const updated = await doc.save();
      res.status(201).json({
        success: true,
        message: "Notice published successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Notices] ADD ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/notices/item/:id (Update a single notice)
  updateItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await NoticeSection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Notice section not found" });
      }

      const itemIndex = doc.notices.findIndex(
        (i) => i.id === id || i._id.toString() === id
      );
      if (itemIndex === -1) {
        return res
          .status(404)
          .json({ success: false, message: "Notice item not found" });
      }

      const fields = [
        "title",
        "titleBn",
        "cat",
        "catBn",
        "text",
        "textBn",
        "date",
        "dateBn",
        "author",
        "authorBn",
        "memoNo",
        "pinned",
        "file",
        "views",
        "order",
        "isActive",
      ];
      fields.forEach((f) => {
        if (req.body[f] !== undefined) {
          doc.notices[itemIndex][f] = req.body[f];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Notice updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Notices] UPDATE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE /api/notices/item/:id (Delete a single notice)
  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await NoticeSection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Notice section not found" });
      }

      doc.notices = doc.notices.filter(
        (i) => i.id !== id && i._id.toString() !== id
      );
      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Notice removed successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Notices] DELETE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/notices/reset (Reset to initial default notices & school pad)
  resetNotices: async (req, res) => {
    try {
      let doc = await NoticeSection.findOne();
      if (!doc) {
        doc = await NoticeSection.create(defaultNoticeSectionData);
      } else {
        Object.assign(doc, defaultNoticeSectionData);
        await doc.save();
      }
      res.status(200).json({
        success: true,
        message: "Notice board and School Pad reset to defaults",
        data: doc,
      });
    } catch (error) {
      console.error("[Notices] RESET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = NoticeController;
