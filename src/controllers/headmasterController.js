const HeadmasterSection = require("../models/headmasterModel");

const defaultData = {
  isActive: true,
  name: "Mr. Md. Abdul Jalil Mia",
  nameBn: "জনাব মো. আবদুল জলিল মিয়া",
  role: "Headmaster",
  roleBn: "প্রধান শিক্ষক",
  degree: "M.Sc (Physics), M.Ed (1st Class, DU) · 22+ Years in Secondary Education",
  degreeBn: "এম.এসসি (পদার্থবিজ্ঞান), এম.এড (প্রথম শ্রেণি, ঢাবি) · শিক্ষাক্ষেত্রে ২২+ বছরের অভিজ্ঞতা",
  imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  imageAlt: "Headmaster Mr. Md. Abdul Jalil Mia",

  showBadge: true,
  badgeText: "Ranked Top Model General Secondary School in the District",
  badgeTextBn: "উপজেলা ও জেলা পর্যায়ের সেরা মডেল মাধ্যমিক বিদ্যালয়",
  badgeIcon: "★",

  tag: "Welcome to Mirashani Academy",
  tagBn: "মিরাশানী একাডেমিতে স্বাগতম",
  title: "Inspiring Moral Character, Creative Thought & Academic Excellence",
  titleBn: "নৈতিক চরিত্র, সৃজনশীল চিন্তা ও সাধারণ শিক্ষায় শ্রেষ্ঠত্ব",

  description:
    "Established in 2005, Mirashani Academy is a premier general secondary high school (Classes 6 to 10) dedicated to cultivating enlightened human beings. Following the National Curriculum (NCTB) and Board of Intermediate and Secondary Education standards, we nurture students through disciplined morning assemblies, well-equipped science laboratories, rich library reading habits, and communicative fluency.",
  descriptionBn:
    "২০০৫ সালে প্রতিষ্ঠিত মিরাশানী একাডেমি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) এবং মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ডের অধীনে পরিচালিত একটি প্রথম সারির সাধারণ মাধ্যমিক বিদ্যালয়। আমরা কেবল পুঁথিগত শিক্ষায় সীমাবদ্ধ না থেকে প্রতিটি শিক্ষার্থীর নৈতিক চরিত্র, দেশপ্রেম, নিয়মানুবর্তিতা ও বিজ্ঞানমনস্ক দৃষ্টিভঙ্গি গঠনে নিবেদিতপ্রাণ।",

  showEmpowerBox: true,
  empowerIcon: "🌱",
  empowerText: "We empower students through:",
  empowerTextBn: "আমরা শিক্ষার্থীদের গড়ে তুলি:",
  empowerSkills: [
    "Creative Thinking & Problem Solving",
    "ICT & Coding Literacy",
    "Moral Discipline & Leadership",
    "Science & Practical Innovation",
  ],
  empowerSkillsBn: [
    "সৃজনশীল চিন্তা ও সমস্যা সমাধান",
    "আইসিটি ও ডিজিটাল স্বাক্ষরতা",
    "নৈতিক মূল্যবোধ ও নেতৃত্ব",
    "বিজ্ঞানচর্চা ও ব্যবহারিক উদ্ভাবন",
  ],

  features: [
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

  btn1Show: true,
  btn1Text: "General School Curriculum",
  btn1TextBn: "সাধারণ শিক্ষাক্রম জানুন",
  btn1Link: "/academics",

  btn2Show: true,
  btn2Text: "Meet Respected Teachers",
  btn2TextBn: "শ্রদ্ধেয় শিক্ষকমণ্ডলী",
  btn2Link: "/teachers",
};

const HeadmasterController = {
  // GET /api/headmaster
  getHeadmaster: async (req, res) => {
    try {
      let doc = await HeadmasterSection.findOne();
      if (!doc) {
        doc = await HeadmasterSection.create(defaultData);
      }
      res.status(200).json({ success: true, data: doc });
    } catch (error) {
      console.error("[Headmaster] GET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/headmaster
  updateHeadmaster: async (req, res) => {
    try {
      let doc = await HeadmasterSection.findOne();
      if (!doc) {
        doc = await HeadmasterSection.create({ ...defaultData, ...req.body });
      } else {
        Object.assign(doc, req.body);
        await doc.save();
      }
      res.status(200).json({
        success: true,
        message: "Headmaster message updated successfully",
        data: doc,
      });
    } catch (error) {
      console.error("[Headmaster] UPDATE error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/headmaster/reset
  resetHeadmaster: async (req, res) => {
    try {
      await HeadmasterSection.deleteMany({});
      const doc = await HeadmasterSection.create(defaultData);
      res.status(200).json({
        success: true,
        message: "Headmaster message reset to defaults",
        data: doc,
      });
    } catch (error) {
      console.error("[Headmaster] RESET error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/headmaster/upload-image (ImgBB upload)
  uploadImage: async (req, res) => {
    try {
      const { image } = req.body;
      if (!image) {
        return res.status(400).json({ success: false, message: "Image base64 or URL is required" });
      }

      const apiKey = process.env.IMGBB_API_KEY || "4d8f54c51bb726b496f79bc6709ddf3e";
      const params = new URLSearchParams();

      let cleanImage = image;

      if (typeof image === "string" && image.startsWith("data:image")) {
        cleanImage = image.split(",")[1] || image;
      } else if (typeof image === "string" && (image.startsWith("http://") || image.startsWith("https://"))) {
        try {
          const imgResponse = await fetch(image);
          if (imgResponse.ok) {
            const buffer = await imgResponse.arrayBuffer();
            cleanImage = Buffer.from(buffer).toString("base64");
          }
        } catch {
          // Fall through
        }
      }

      params.append("image", cleanImage);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: params,
      });

      const data = await response.json();
      if (data && data.success && data.data) {
        const url = data.data.display_url || data.data.url;
        res.status(200).json({
          success: true,
          url,
          data: data.data,
        });
      } else {
        res.status(400).json({
          success: false,
          message: data?.error?.message || "ImgBB upload failed",
        });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = HeadmasterController;
