const RoutineSection = require("../models/routineModel");

const defaultRoutineItems = [
  {
    id: "routine-1",
    time: "08:30 AM - 09:00 AM",
    timeBn: "সকাল ৮:৩০ - ৯:০০",
    title: "Morning Assembly & Physical Drill",
    titleBn: "প্রাত্যহিক সমাবেশ ও শারীরিক কসরত",
    desc: "National anthem, scripture recitation, school oath, and PT fitness drill in main ground.",
    descBn: "পবিত্র কোরআন ও ধর্মগ্রন্থ পাঠ, জাতীয় সংগীত, শপথ বাক্য পাঠ এবং মাঠভর্তি শরীরচর্চা (PT)।",
    order: 1,
    isActive: true,
  },
  {
    id: "routine-2",
    time: "09:00 AM - 10:30 AM",
    timeBn: "সকাল ৯:০০ - ১০:৩০",
    title: "1st & 2nd Academic Periods",
    titleBn: "১ম ও ২য় পিরিয়ড (মূল তাত্ত্বিক বিষয়)",
    desc: "Core academic subjects: Bangla 1st/2nd Paper, English Communicative Grammar, and Mathematics.",
    descBn: "বাংলা সাহিত্য ও ব্যাকরণ, ইংরেজি কমিউনিকেটিভ গ্রামার এবং বীজগণিত-জ্যামিতি।",
    order: 2,
    isActive: true,
  },
  {
    id: "routine-3",
    time: "10:30 AM - 12:00 PM",
    timeBn: "সকাল ১০:৩০ - ১২:০০",
    title: "3rd & 4th Academic Periods",
    titleBn: "৩য় ও ৪র্থ পিরিয়ড (বিভাগীয় বিষয়)",
    desc: "Discipline subjects: Physics, Chemistry, Accounting, History, Geography, and Higher Mathematics.",
    descBn: "পদার্থবিজ্ঞান, রসায়ন, হিসাববিজ্ঞান, বাংলাদেশ ও বিশ্বপরিচয় এবং সাধারণ বিজ্ঞান।",
    order: 3,
    isActive: true,
  },
  {
    id: "routine-4",
    time: "12:00 PM - 12:45 PM",
    timeBn: "দুপুর ১২:০০ - ১২:৪৫",
    title: "Mid-Day Tiffin & Dhuhr Prayer Break",
    titleBn: "টিফিন বিরতি ও যোহরের নামাজ",
    desc: "Nutritious lunch tiffin, socializing, and congregational Zohr prayer in school prayer room.",
    descBn: "স্বাস্থ্যকর টিফিন গ্রহণ, সহপাঠীদের সাথে সামাজিকীকরণ ও নামাজকক্ষে জামাতে নামাজ।",
    order: 4,
    isActive: true,
  },
  {
    id: "routine-5",
    time: "12:45 PM - 02:15 PM",
    timeBn: "দুপুর ১২:৪৫ - ২:১৫",
    title: "5th & 6th Academic Periods",
    titleBn: "৫ম ও ৬ষ্ঠ পিরিয়ড (ব্যবহারিক ল্যাব)",
    desc: "Science Laboratory Practicals, ICT Computer Lab lessons, Biology experiments, and BGS lectures.",
    descBn: "বিজ্ঞান ল্যাবে যন্ত্রপাতি নিয়ে পরীক্ষা, আইসিটি কম্পিউটার ল্যাবে টাইপিং ও প্রোগ্রামিং।",
    order: 5,
    isActive: true,
  },
  {
    id: "routine-6",
    time: "02:15 PM - 03:00 PM",
    timeBn: "দুপুর ২:১৫ - ৩:০০",
    title: "7th Period & Class Review",
    titleBn: "৭ম পিরিয়ড ও ক্লাস ডায়রি মূল্যায়ন",
    desc: "Doubt clearing, homework diary checking, library reference reading, and moral guidance.",
    descBn: "হোমওয়ার্ক চেক, পাঠাগার থেকে বই আদান-প্রদান এবং শিক্ষকদের বিশেষ পরামর্শ গ্রহণ।",
    order: 6,
    isActive: true,
  },
  {
    id: "routine-7",
    time: "03:00 PM - 04:30 PM",
    timeBn: "বিকাল ৩:০০ - ৪:৩০",
    title: "Co-Curricular & Outdoor Activities",
    titleBn: "সহ-শিক্ষা ও ক্রীড়া প্রশিক্ষণ",
    desc: "Bangladesh Scouts parade, debate practice, football/cricket games, and science club projects.",
    descBn: "বাংলাদেশ স্কাউটস প্যারেড, সংসদীয় বিতর্ক কর্মশালা, ফুটবল ও ক্রিকেট অনুশীলন।",
    order: 7,
    isActive: true,
  },
];

const defaultRoutineSectionData = {
  isActive: true,
  tag: "Discipline & Routine",
  tagBn: "শৃঙ্খলা ও সময়ানুবর্তিতা",
  title: "A Day in Mirashani School Life",
  titleBn: "বিদ্যালয়ের একটি সাধারণ কর্মদিবস",
  subtitle:
    "A disciplined, vibrant daily routine from morning national assembly to afternoon co-curricular activities.",
  subtitleBn:
    "সকালের প্রাত্যহিক সমাবেশ ও জাতীয় সংগীত থেকে শুরু করে অপরাহ্নের খেলাধুলা ও সহ-শিক্ষা কার্যক্রমের সুবিন্যস্ত সূচি।",
  items: defaultRoutineItems,
};

const RoutineController = {
  // GET /api/routine
  getRoutine: async (req, res) => {
    try {
      let doc = await RoutineSection.findOne();
      if (!doc) {
        doc = await RoutineSection.create(defaultRoutineSectionData);
      } else if (!doc.items || doc.items.length === 0) {
        doc.items = defaultRoutineItems;
        await doc.save();
      }
      res.status(200).json({ success: true, data: doc });
    } catch (error) {
      console.error("[Routine] GET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/routine (Update whole section & items)
  updateRoutine: async (req, res) => {
    try {
      let doc = await RoutineSection.findOne();
      if (!doc) {
        doc = new RoutineSection(defaultRoutineSectionData);
      }

      const updatableFields = [
        "isActive",
        "tag",
        "tagBn",
        "title",
        "titleBn",
        "subtitle",
        "subtitleBn",
        "items",
      ];

      updatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          doc[field] = req.body[field];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Discipline & Routine section updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Routine] UPDATE error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/routine/item (Add a single routine item)
  addItem: async (req, res) => {
    try {
      let doc = await RoutineSection.findOne();
      if (!doc) {
        doc = new RoutineSection(defaultRoutineSectionData);
      }

      const newItem = {
        id: req.body.id || `routine-${Date.now()}`,
        time: req.body.time || "08:00 AM - 09:00 AM",
        timeBn: req.body.timeBn || "সকাল ৮:০০ - ৯:০০",
        title: req.body.title || "New Period / Activity",
        titleBn: req.body.titleBn || "নতুন পিরিয়ড / কার্যক্রম",
        desc: req.body.desc || "",
        descBn: req.body.descBn || "",
        order:
          req.body.order !== undefined
            ? req.body.order
            : (doc.items ? doc.items.length + 1 : 1),
        isActive: req.body.isActive !== undefined ? req.body.isActive : true,
      };

      doc.items.push(newItem);
      const updated = await doc.save();
      res.status(201).json({
        success: true,
        message: "Routine period added successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Routine] ADD ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/routine/item/:id (Update a single routine item)
  updateItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await RoutineSection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Routine section not found" });
      }

      const itemIndex = doc.items.findIndex(
        (i) => i.id === id || i._id.toString() === id
      );
      if (itemIndex === -1) {
        return res
          .status(404)
          .json({ success: false, message: "Routine period not found" });
      }

      const fields = [
        "time",
        "timeBn",
        "title",
        "titleBn",
        "desc",
        "descBn",
        "order",
        "isActive",
      ];
      fields.forEach((f) => {
        if (req.body[f] !== undefined) {
          doc.items[itemIndex][f] = req.body[f];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Routine period updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Routine] UPDATE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE /api/routine/item/:id (Delete a single routine item)
  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await RoutineSection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Routine section not found" });
      }

      doc.items = doc.items.filter(
        (i) => i.id !== id && i._id.toString() !== id
      );
      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Routine period removed successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Routine] DELETE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/routine/reset (Reset to initial default data)
  resetRoutine: async (req, res) => {
    try {
      let doc = await RoutineSection.findOne();
      if (!doc) {
        doc = await RoutineSection.create(defaultRoutineSectionData);
      } else {
        Object.assign(doc, defaultRoutineSectionData);
        await doc.save();
      }
      res.status(200).json({
        success: true,
        message: "Discipline & Routine section reset to defaults",
        data: doc,
      });
    } catch (error) {
      console.error("[Routine] RESET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = RoutineController;
