const FacilitySection = require("../models/facilityModel");

const defaultFacilityItems = [
  {
    id: "fac-1",
    icon: "🔬",
    metric: "3 Specialized Labs",
    metricBn: "৩টি পৃথক ল্যাব",
    title: "Modern Science Labs",
    titleBn: "আধুনিক ৩টি বিজ্ঞানাগার",
    desc: "Separate, fully equipped laboratories for Physics, Chemistry, and Biology with microscopes, burners, glassware, and certified reagents.",
    descBn: "পদার্থ, রসায়ন ও জীববিজ্ঞানের পৃথক শীতাতপ নিয়ন্ত্রিত ল্যাবরেটরি যেখানে শতভাগ ব্যবহারিক ক্লাস নিশ্চিত করা হয়।",
    order: 1,
    isActive: true,
  },
  {
    id: "fac-2",
    icon: "🖥️",
    metric: "Smart Displays",
    metricBn: "স্মার্ট ক্লাসরুম",
    title: "Multimedia Digital Classrooms",
    titleBn: "ডিজিটাল মাল্টিমিডিয়া ক্লাসরুম",
    desc: "Interactive smart projectors and audiovisual setups making abstract science, math, and geography topics easy to understand.",
    descBn: "প্রজেক্টর ও স্মার্ট ডিসপ্লে সুবিধা সম্বলিত আধুনিক ক্লাসরুম যা জটিল বৈজ্ঞানিক তত্ত্বকে সহজবোধ্য করে তোলে।",
    order: 2,
    isActive: true,
  },
  {
    id: "fac-3",
    icon: "📚",
    metric: "10,000+ Books",
    metricBn: "১০,০০০+ বই",
    title: "Central Academic Library",
    titleBn: "সমৃদ্ধ কেন্দ্রীয় পাঠাগার",
    desc: "Rich collection of over 10,000+ national textbook guides, encyclopedias, literature, and quiet reading booths.",
    descBn: "১০,০০০ এরও বেশি পাঠ্যপুস্তক গাইড, বিশ্বকোষ, বাংলা ও বিশ্বসাহিত্যের বই এবং শান্ত পড়াশোনার পরিবেশ।",
    order: 3,
    isActive: true,
  },
  {
    id: "fac-4",
    icon: "💻",
    metric: "40 Workstations",
    metricBn: "৪০টি ওয়ার্কস্টেশন",
    title: "ICT & Computer Lab",
    titleBn: "আইসিটি ও কম্পিউটার ল্যাব",
    desc: "40 modern networked computers with high-speed broadband internet, digital typing stations, and introductory programming.",
    descBn: "উচ্চগতির ব্রডব্যান্ড ইন্টারনেট এবং ৪০টি আধুনিক কম্পিউটার সম্বলিত আধুনিক ডিজিটাল ল্যাবরেটরি।",
    order: 4,
    isActive: true,
  },
  {
    id: "fac-5",
    icon: "⚽",
    metric: "Full-size Ground",
    metricBn: "পূর্ণাঙ্গ খেলার মাঠ",
    title: "Large Green Sports Playground",
    titleBn: "বিশাল সবুজ খেলার মাঠ",
    desc: "Expansive field with football goalposts, cricket pitch, volleyball court, and running track for daily physical exercise.",
    descBn: "ফুটবল গোলপোস্ট, ক্রিকেট পিচ এবং দৌড়ের ট্র্যাক সম্বলিত সুপ্রশস্ত ঘাসে ঢাকা স্কুল মাঠ।",
    order: 5,
    isActive: true,
  },
  {
    id: "fac-6",
    icon: "🏛️",
    metric: "Open Cultural Plaza",
    metricBn: "সাংস্কৃতিক চত্বর",
    title: "Shaheed Minar & Cultural Stage",
    titleBn: "স্থায়ী শহীদ মিনার ও সাংস্কৃতিক মঞ্চ",
    desc: "Architectural monument for Language Day (21st February), Victory Day, Independence Day, and school open-air assemblies.",
    descBn: "একুশে ফেব্রুয়ারি, স্বাধীনতা দিবস ও বিজয় দিবসে শ্রদ্ধা নিবেদন এবং সাংস্কৃতিক অনুষ্ঠানের কেন্দ্রবিন্দু।",
    order: 6,
    isActive: true,
  },
  {
    id: "fac-7",
    icon: "💧",
    metric: "RO Filtered Pure Water",
    metricBn: "RO ফিল্টার পানি",
    title: "Pure Drinking Water & Cafeteria",
    titleBn: "বিশুদ্ধ পানীয় জল ও স্বাস্থ্যকর ক্যান্টিন",
    desc: "Multi-stage RO filtered drinking water points and hygienic canteen providing fresh, nutritious tiffin snacks.",
    descBn: "আরও (RO) ফিল্টারযুক্ত বিশুদ্ধ খাবার পানির প্ল্যান্ট এবং পরিচ্ছন্ন খাবার সরবরাহকারী ক্যান্টিন।",
    order: 7,
    isActive: true,
  },
  {
    id: "fac-8",
    icon: "🛡️",
    metric: "24/7 Safe Campus",
    metricBn: "২৪/৭ নিরাপদ ক্যাম্পাস",
    title: "Campus Safety & CCTV Security",
    titleBn: "নিরাপদ ক্যাম্পাস ও সিসিটিভি নজরদারি",
    desc: "Secured boundary perimeter, 24/7 CCTV surveillance cameras across all corridors, and dedicated girls’ common room.",
    descBn: "সম্পূর্ণ প্রাচীরঘেরা ক্যাম্পাস, সার্বক্ষণিক সিসিটিভি ক্যামেরা এবং ছাত্রীদের জন্য পৃথক কমনরুম।",
    order: 8,
    isActive: true,
  },
];

const defaultFacilitySectionData = {
  isActive: true,
  tag: "Modern Facilities",
  tagBn: "ক্যাম্পাস অবকাঠামো",
  title: "Campus Infrastructure & Learning Spaces",
  titleBn: "আধুনিক সুযোগ-সুবিধা ও শিক্ষাঙ্গন",
  subtitle:
    "A secure, verdant, and technologically equipped campus built to foster academic concentration and physical vitality.",
  subtitleBn:
    "একটি নিরাপদ, সুশৃঙ্খল ও সবুজ ক্যাম্পাস যা শিক্ষার্থীদের পড়াশোনার অনুকূল পরিবেশ নিশ্চিত করে।",
  facilities: defaultFacilityItems,
};

const FacilityController = {
  // GET /api/facilities
  getFacilities: async (req, res) => {
    try {
      let doc = await FacilitySection.findOne();
      if (!doc) {
        doc = await FacilitySection.create(defaultFacilitySectionData);
      } else if (!doc.facilities || doc.facilities.length === 0) {
        doc.facilities = defaultFacilityItems;
        await doc.save();
      }
      res.status(200).json({ success: true, data: doc });
    } catch (error) {
      console.error("[Facilities] GET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/facilities (Update whole section & facilities list)
  updateFacilities: async (req, res) => {
    try {
      let doc = await FacilitySection.findOne();
      if (!doc) {
        doc = new FacilitySection(defaultFacilitySectionData);
      }

      const updatableFields = [
        "isActive",
        "tag",
        "tagBn",
        "title",
        "titleBn",
        "subtitle",
        "subtitleBn",
        "facilities",
      ];

      updatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          doc[field] = req.body[field];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Modern Facilities section updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Facilities] UPDATE error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/facilities/item (Add a single facility item)
  addItem: async (req, res) => {
    try {
      let doc = await FacilitySection.findOne();
      if (!doc) {
        doc = new FacilitySection(defaultFacilitySectionData);
      }

      const newItem = {
        id: req.body.id || `fac-${Date.now()}`,
        icon: req.body.icon || "🏢",
        metric: req.body.metric || "Modern Space",
        metricBn: req.body.metricBn || "আধুনিক সুবিধা",
        title: req.body.title || "New Facility",
        titleBn: req.body.titleBn || "নতুন সুবিধা",
        desc: req.body.desc || "",
        descBn: req.body.descBn || "",
        order:
          req.body.order !== undefined
            ? req.body.order
            : (doc.facilities ? doc.facilities.length + 1 : 1),
        isActive: req.body.isActive !== undefined ? req.body.isActive : true,
      };

      doc.facilities.push(newItem);
      const updated = await doc.save();
      res.status(201).json({
        success: true,
        message: "Facility item added successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Facilities] ADD ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/facilities/item/:id (Update a single facility item)
  updateItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await FacilitySection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Facilities section not found" });
      }

      const itemIndex = doc.facilities.findIndex(
        (i) => i.id === id || i._id.toString() === id
      );
      if (itemIndex === -1) {
        return res
          .status(404)
          .json({ success: false, message: "Facility item not found" });
      }

      const fields = [
        "icon",
        "metric",
        "metricBn",
        "title",
        "titleBn",
        "desc",
        "descBn",
        "order",
        "isActive",
      ];
      fields.forEach((f) => {
        if (req.body[f] !== undefined) {
          doc.facilities[itemIndex][f] = req.body[f];
        }
      });

      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Facility item updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Facilities] UPDATE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE /api/facilities/item/:id (Delete a single facility item)
  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      let doc = await FacilitySection.findOne();
      if (!doc) {
        return res
          .status(404)
          .json({ success: false, message: "Facilities section not found" });
      }

      doc.facilities = doc.facilities.filter(
        (i) => i.id !== id && i._id.toString() !== id
      );
      const updated = await doc.save();
      res.status(200).json({
        success: true,
        message: "Facility item removed successfully",
        data: updated,
      });
    } catch (error) {
      console.error("[Facilities] DELETE ITEM error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/facilities/reset (Reset to initial default data)
  resetFacilities: async (req, res) => {
    try {
      let doc = await FacilitySection.findOne();
      if (!doc) {
        doc = await FacilitySection.create(defaultFacilitySectionData);
      } else {
        Object.assign(doc, defaultFacilitySectionData);
        await doc.save();
      }
      res.status(200).json({
        success: true,
        message: "Modern Facilities section reset to defaults",
        data: doc,
      });
    } catch (error) {
      console.error("[Facilities] RESET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = FacilityController;
