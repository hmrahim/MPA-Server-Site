const ClubSection = require("../models/clubModel");

const defaultClubItems = [
  {
    id: "club-1",
    icon: "🚀",
    name: "Science & Innovation Club",
    nameBn: "বিজ্ঞান ও উদ্ভাবন ক্লাব",
    desc: "Weekly practical experiments, science model displays, astronomy sky-watching, and Math Olympiad workshops.",
    descBn: "সাপ্তাহিক বৈজ্ঞানিক প্রজেক্ট প্রদর্শনী, টেলিস্কোপে আকাশ পর্যবেক্ষণ এবং গণিত অলিম্পিয়াড প্রশিক্ষণ।",
    order: 1,
    isActive: true,
  },
  {
    id: "club-2",
    icon: "🎙️",
    name: "School Debating Society",
    nameBn: "স্কুল ডিবেটিং সোসাইটি (বিতর্ক পরিষদ)",
    desc: "Parliamentary and traditional debate in Bangla & English, extempore speech, and championship.",
    descBn: "বাংলা ও ইংরেজি ভাষায় সনাতনী ও সংসদীয় বিতর্ক কর্মশালা এবং আন্তঃস্কুল বিতর্ক প্রতিযোগিতা।",
    order: 2,
    isActive: true,
  },
  {
    id: "club-3",
    icon: "🏕️",
    name: "Bangladesh Scouts & Girl Guides",
    nameBn: "বাংলাদেশ স্কাউটস ও গার্ল গাইডস",
    desc: "Character building, outdoor camping, first aid, traffic awareness, and national disaster relief.",
    descBn: "নৈতিক চরিত্র গঠন, ক্যাম্পিং, প্রাথমিক চিকিৎসা ও ট্রাফিক সচেতনতা এবং সামাজিক মানবসেবা।",
    order: 3,
    isActive: true,
  },
  {
    id: "club-4",
    icon: "🎭",
    name: "Cultural & Performing Arts",
    nameBn: "সাংস্কৃতিক ও সাহিত্য সংসদ",
    desc: "Patriotic songs, Nazrul-Rabindra sangeet, recitation, theatre staging, and national celebrations.",
    descBn: "দেশাত্মবোধক গান, রবীন্দ্র-নজরুল সঙ্গীত, আবৃত্তি, নাট্যমঞ্চায়ন ও বার্ষিক দেয়াল পত্রিকা প্রকাশনা।",
    order: 4,
    isActive: true,
  },
  {
    id: "club-5",
    icon: "🏆",
    name: "Sports & Athletics Association",
    nameBn: "ক্রীড়া ও অ্যাথলেটিক্স পরিষদ",
    desc: "Football cup tournaments, cricket leagues, badminton tournaments, 100m sprint, and athletic meets.",
    descBn: "আন্তঃহাউস ফুটবল ও ক্রিকেট টুর্নামেন্ট, ১০০ মিটার স্প্রিন্ট, ব্যাডমিন্টন ও হ্যান্ডবল প্রতিযোগিতা।",
    order: 5,
    isActive: true,
  },
  {
    id: "club-6",
    icon: "📖",
    name: "Language & Literary Club",
    nameBn: "ভাষা ও ইংরেজি ক্লাব",
    desc: "Spelling bee contests, creative writing, poetry recitations, and publishing the school annual wall magazine.",
    descBn: "স্পেলিং বি প্রতিযোগিতা, ক্রিয়েটিভ ইংরেজি রাইটিং এবং সাবলীল উচ্চারণ ও কথোপকথন চর্চা।",
    order: 6,
    isActive: true,
  },
];

const defaultClubSectionData = {
  isActive: true,
  tag: "Holistic Student Life",
  tagBn: "সহ-শিক্ষা কার্যক্রম",
  title: "Co-Curricular Clubs & Activities",
  titleBn: "শিক্ষার্থী ক্লাব ও প্রতিভা বিকাশ",
  subtitle:
    "Beyond the classroom, our students discover leadership, teamwork, public speaking, and creative expression.",
  subtitleBn:
    "শ্রেণিকক্ষের বাইরে নেতৃত্ব, জনসম্মুখে বক্তৃতা, বিতর্ক ও শরীরচর্চায় শিক্ষার্থীদের স্বতঃস্ফূর্ত অংশগ্রহণ।",
  clubs: defaultClubItems,
};

const ClubController = {
  // GET /api/clubs
  getClubs: async (req, res) => {
    try {
      let doc = await ClubSection.findOne();
      if (!doc) {
        doc = await ClubSection.create(defaultClubSectionData);
      } else if (!doc.clubs || doc.clubs.length === 0) {
        doc.clubs = defaultClubItems;
        await doc.save();
      }
      res.status(200).json({ success: true, data: doc });
    } catch (error) {
      console.error("[Clubs] GET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/clubs (Update whole section & clubs list)
  updateClubs: async (req, res) => {
    try {
      let doc = await ClubSection.findOne();
      if (!doc) {
        doc = new ClubSection(defaultClubSectionData);
      }

      const updatableFields = [
        "isActive",
        "tag",
        "tagBn",
        "title",
        "titleBn",
        "subtitle",
        "subtitleBn",
        "clubs",
      ];

      updatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          doc[field] = req.body[field];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Co-Curricular Clubs section updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Clubs] UPDATE error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/clubs/item (Add a single club item)
  addItem: async (req, res) => {
    try {
      let doc = await ClubSection.findOne();
      if (!doc) {
        doc = new ClubSection(defaultClubSectionData);
      }

      const newItem = {
        id: req.body.id || `club-${Date.now()}`,
        icon: req.body.icon || "🎯",
        name: req.body.name || "New Student Club",
        nameBn: req.body.nameBn || "নতুন শিক্ষার্থী ক্লাব",
        desc: req.body.desc || "",
        descBn: req.body.descBn || "",
        order:
          req.body.order !== undefined
            ? req.body.order
            : (doc.clubs ? doc.clubs.length + 1 : 1),
        isActive: req.body.isActive !== undefined ? req.body.isActive : true,
      };

      doc.clubs.push(newItem);
      const updated = await doc.save();
      res.status(201).json({
        success: true,
        message: "Club item added successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Clubs] ADD ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/clubs/item/:id (Update a single club item)
  updateItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await ClubSection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Clubs section not found" });
      }

      const itemIndex = doc.clubs.findIndex(
        (i) => i.id === id || i._id.toString() === id
      );
      if (itemIndex === -1) {
        return res
          .status(404)
          .json({ success: false, message: "Club item not found" });
      }

      const fields = [
        "icon",
        "name",
        "nameBn",
        "desc",
        "descBn",
        "order",
        "isActive",
      ];
      fields.forEach((f) => {
        if (req.body[f] !== undefined) {
          doc.clubs[itemIndex][f] = req.body[f];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Club item updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Clubs] UPDATE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE /api/clubs/item/:id (Delete a single club item)
  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await ClubSection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Clubs section not found" });
      }

      doc.clubs = doc.clubs.filter(
        (i) => i.id !== id && i._id.toString() !== id
      );
      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Club item removed successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Clubs] DELETE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/clubs/reset (Reset to initial default data)
  resetClubs: async (req, res) => {
    try {
      let doc = await ClubSection.findOne();
      if (!doc) {
        doc = await ClubSection.create(defaultClubSectionData);
      } else {
        Object.assign(doc, defaultClubSectionData);
        await doc.save();
      }
      res.status(200).json({
        success: true,
        message: "Co-Curricular Clubs section reset to defaults",
        data: doc,
      });
    } catch (error) {
      console.error("[Clubs] RESET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = ClubController;
