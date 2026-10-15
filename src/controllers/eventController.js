const Event = require("../models/eventModel");
const EventPageConfig = require("../models/eventModel").EventPageConfig;
const Gallery = require("../models/galleryModel");

const defaultPageConfig = {
  badge: "Campus Vibrancy & Student Life",
  badgeBn: "ক্যাম্পাস জীবন ও উৎসবের মুহূর্ত",
  title: "Events Calendar & Photo Gallery",
  titleBn: "ইভেন্ট ক্যালেন্ডার ও ফটো গ্যালারি",
  subtitle:
    "Explore our colorful campus festivities: from athletic championships and robotics exhibitions to national day celebrations and graduation ceremonies.",
  subtitleBn:
    "বার্ষিক ক্রীড়া প্রতিযোগিতা, বিজ্ঞান মেলা, সাংস্কৃতিক উৎসব ও জাতীয় দিবস উদযাপনের স্মৃতির অ্যালবাম।",
  eventsBadge: "School Calendar",
  eventsBadgeBn: "একাডেমিক ক্যালেন্ডার",
  eventsTitle: "Academic Calendar & Upcoming Events",
  eventsTitleBn: "একাডেমিক ক্যালেন্ডার ও আসন্ন অনুষ্ঠান",
  eventsSubtitle:
    "Stay updated with scheduled examinations, science olympiads, cultural meets, and national day observances.",
  eventsSubtitleBn:
    "পরীক্ষার সময়সূচি, বিজ্ঞান অলিম্পিয়াড, সাংস্কৃতিক সমাবেশ ও জাতীয় দিবসের সময়সূচি।",
  galleryBadge: "Memories & Moments",
  galleryBadgeBn: "স্মৃতি ও সোনালী মুহূর্ত",
  galleryTitle: "Campus Life Photo Gallery",
  galleryTitleBn: "ক্যাম্পাস জীবন ফটো গ্যালারি",
  gallerySubtitle: "Click any image to view in high definition lightbox",
  gallerySubtitleBn: "পূর্ণাঙ্গ আকারে দেখতে যেকোনো ছবিতে ক্লিক করুন",
};

const categoryBnMap = {
  Academic: "একাডেমিক",
  Exam: "পরীক্ষা",
  Sports: "ক্রীড়া",
  Cultural: "সাংস্কৃতিক",
  Science: "বিজ্ঞান",
  National: "জাতীয় দিবস",
  Awards: "পুরস্কার",
  Scouts: "স্কাউট",
  Campus: "ক্যাম্পাস",
};

const statusBnMap = {
  Upcoming: "আসন্ন",
  Ongoing: "চলমান",
  Completed: "সম্পন্ন",
  "Registration Open": "নিবন্ধন চলছে",
};

const defaultEvents = [
  {
    title: "Half-Yearly Examination Commences",
    titleBn: "অর্ধ-বার্ষিক পরীক্ষা শুরু",
    dateBadge: "OCT 10",
    fullDate: "10 Oct 2026",
    fullDateBn: "১০ অক্টো ২০২৬",
    desc: "Regular written and practical examinations for Classes Six through Ten across Science, Business Studies and Humanities groups.",
    descBn: "৬ষ্ঠ থেকে ১০ম শ্রেণির বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক বিভাগের নিয়মিত লিখিত ও ব্যবহারিক পরীক্ষা।",
    time: "9:00 AM - 12:30 PM",
    timeBn: "সকাল ৯:০০ - দুপুর ১২:৩০",
    location: "Main Academic Building & Examination Halls",
    locationBn: "প্রধান একাডেমিক ভবন ও পরীক্ষা হল",
    category: "Exam",
    categoryBn: "পরীক্ষা",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
    statusBn: "আসন্ন",
    order: 1,
  },
  {
    title: "Annual Science Fair & Math Olympiad",
    titleBn: "বার্ষিক বিজ্ঞান মেলা ও গণিত অলিম্পিয়াড",
    dateBadge: "OCT 26",
    fullDate: "26 Oct 2026",
    fullDateBn: "২৬ অক্টো ২০২৬",
    desc: "Student scientific displays, working physics models, chemistry wonders, biology specimens, and Rubik cube contests.",
    descBn: "শিক্ষার্থীদের বৈজ্ঞানিক প্রদর্শনী, কার্যকরী পদার্থবিজ্ঞান মডেল, রসায়ন বিস্ময় ও জীববিজ্ঞান নমুনা।",
    time: "10:00 AM - 4:00 PM",
    timeBn: "সকাল ১০:০০ - বিকাল ৪:০০",
    location: "School Auditorium & Open Field",
    locationBn: "স্কুল অডিটোরিয়াম ও খোলা মাঠ",
    category: "Science",
    categoryBn: "বিজ্ঞান",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    status: "Registration Open",
    statusBn: "নিবন্ধন চলছে",
    order: 2,
  },
  {
    title: "Great Victory Day Cultural Festivities",
    titleBn: "মহান বিজয় দিবসের সাংস্কৃতিক উৎসব",
    dateBadge: "DEC 16",
    fullDate: "16 Dec 2026",
    fullDateBn: "১৬ ডিসে ২০২৬",
    desc: "National anthem flag hoisting, patriotic choir performance, historical drama, reciting poetry, and freedom fighter felicitation.",
    descBn: "জাতীয় পতাকা উত্তোলন, দেশাত্মবোধক সংগীত, ঐতিহাসিক নাটক, কবিতা আবৃত্তি ও মুক্তিযোদ্ধা সংবর্ধনা।",
    time: "8:00 AM - 1:00 PM",
    timeBn: "সকাল ৮:০০ - দুপুর ১:০০",
    location: "Shaheed Minar Premises & Stage",
    locationBn: "শহীদ মিনার প্রাঙ্গণ ও মঞ্চ",
    category: "Cultural",
    categoryBn: "সাংস্কৃতিক",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
    statusBn: "আসন্ন",
    order: 3,
  },
  {
    title: "Annual Sports Day & Athletics Tournament",
    titleBn: "বার্ষিক ক্রীড়া দিবস ও অ্যাথলেটিক্স টুর্নামেন্ট",
    dateBadge: "DEC 20",
    fullDate: "20 Dec 2026",
    fullDateBn: "২০ ডিসে ২০২৬",
    desc: "Inter-house 100m sprint, 4x100m relay races, high jump, long jump, football final match, and grand prize distribution.",
    descBn: "আন্তঃহাউস ১০০ মিটার স্প্রিন্ট, ৪x১০০ মিটার রিলে, হাই জাম্প, ফুটবল ফাইনাল ও পুরস্কার বিতরণ।",
    time: "9:00 AM - 5:00 PM",
    timeBn: "সকাল ৯:০০ - বিকাল ৫:০০",
    location: "Mirashani Central Stadium Ground",
    locationBn: "মিরাশানী কেন্দ্রীয় স্টেডিয়াম মাঠ",
    category: "Sports",
    categoryBn: "ক্রীড়া",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
    statusBn: "আসন্ন",
    order: 4,
  },
  {
    title: "Annual Prize Giving & Scholarship Gala",
    titleBn: "বার্ষিক পুরস্কার বিতরণী ও বৃত্তি গালা",
    dateBadge: "JAN 15",
    fullDate: "15 Jan 2027",
    fullDateBn: "১৫ জানু ২০২৭",
    desc: "Awarding academic crests, gold medals, and talentpool certificates to top rankers of every class and SSC GPA-5 holders.",
    descBn: "প্রতিটি শ্রেণির শীর্ষ স্থানধারী ও এসএসসি জিপিএ-৫ প্রাপ্তদের ক্রেস্ট, স্বর্ণপদক ও ট্যালেন্টপুল সার্টিফিকেট প্রদান।",
    time: "11:00 AM - 3:00 PM",
    timeBn: "সকাল ১১:০০ - বিকাল ৩:০০",
    location: "School Main Auditorium",
    locationBn: "স্কুলের প্রধান অডিটোরিয়াম",
    category: "Awards",
    categoryBn: "পুরস্কার",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
    statusBn: "আসন্ন",
    order: 5,
  },
];

const defaultGallery = [
  {
    title: "Annual Sports Competition",
    titleBn: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    category: "Sports",
    categoryBn: "ক্রীড়া",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    caption: "Inter-house 100m relay sprint and sports championship",
    captionBn: "আন্তঃহাউস ১০০ মিটার রিলে স্প্রিন্ট ও ক্রীড়া চ্যাম্পিয়নশিপ",
    order: 1,
  },
  {
    title: "Science & STEM Exhibition",
    titleBn: "বিজ্ঞান ও এসটিইএম প্রদর্শনী",
    category: "Science",
    categoryBn: "বিজ্ঞান",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    caption: "Students demonstrating physics models and chemistry experiments",
    captionBn: "শিক্ষার্থীরা পদার্থবিজ্ঞান মডেল ও রসায়ন পরীক্ষা প্রদর্শন করছে",
    order: 2,
  },
  {
    title: "Digital Computer & ICT Lab",
    titleBn: "ডিজিটাল কম্পিউটার ও আইসিটি ল্যাব",
    category: "Academic",
    categoryBn: "একাডেমিক",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    caption: "Multimedia smart classroom and ICT digital literacy",
    captionBn: "মাল্টিমিডিয়া স্মার্ট ক্লাসরুম ও আইসিটি ডিজিটাল সাক্ষরতা",
    order: 3,
  },
  {
    title: "Central Library Reading Hall",
    titleBn: "কেন্দ্রীয় পাঠাগার পাঠকক্ষ",
    category: "Campus",
    categoryBn: "ক্যাম্পাস",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    caption: "Spacious study hall with 10,000+ curriculum & literature books",
    captionBn: "১০,০০০+ পাঠ্যক্রম ও সাহিত্য বই সহ প্রশস্ত পাঠকক্ষ",
    order: 4,
  },
  {
    title: "Cultural Day Celebrations",
    titleBn: "সাংস্কৃতিক দিবস উদযাপন",
    category: "Cultural",
    categoryBn: "সাংস্কৃতিক",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    caption: "Traditional folk songs, drama, and patriotic recitations",
    captionBn: "ঐতিহ্যবাহী লোকসংগীত, নাটক ও দেশাত্মবোধক আবৃত্তি",
    order: 5,
  },
  {
    title: "Merit Medal & Prize Distribution",
    titleBn: "পদক ও পুরস্কার বিতরণ",
    category: "Awards",
    categoryBn: "পুরস্কার",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    caption: "Honoring Golden A+ achievers and scholarship holders",
    captionBn: "গোল্ডেন এ+ প্রাপ্তি ও বৃত্তি ধারকদের সম্মাননা",
    order: 6,
  },
  {
    title: "Morning School Assembly",
    titleBn: "প্রাত্যহিক বিদ্যালয় সমাবেশ",
    category: "Campus",
    categoryBn: "ক্যাম্পাস",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    caption: "Morning national anthem, school oath and physical fitness routine",
    captionBn: "সকালের জাতীয় সংগীত, বিদ্যালয় শপথ ও শারীরিক কসরত",
    order: 7,
  },
  {
    title: "Scouts & Girl Guides Campfire",
    titleBn: "স্কাউট ও গার্ল গাইড ক্যাম্পফায়ার",
    category: "Scouts",
    categoryBn: "স্কাউট",
    imageUrl: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    caption: "Scouting leadership camp and community social service",
    captionBn: "স্কাউটিং নেতৃত্ব শিবির ও সামাজিক সেবামূলক কার্যক্রম",
    order: 8,
  },
];

/* ── PAGE CONFIG CONTROLLERS ── */
exports.getPageConfig = async (req, res) => {
  try {
    let config = await EventPageConfig.findOne();
    if (!config) {
      config = await EventPageConfig.create(defaultPageConfig);
    }
    res.json({ success: true, data: config });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updatePageConfig = async (req, res) => {
  try {
    let config = await EventPageConfig.findOne();
    if (!config) {
      config = new EventPageConfig(req.body);
    } else {
      Object.assign(config, req.body);
    }
    const saved = await config.save();
    res.json({ success: true, data: saved, message: "Page configuration updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.resetPageConfig = async (req, res) => {
  try {
    await EventPageConfig.deleteMany({});
    const config = await EventPageConfig.create(defaultPageConfig);
    res.json({ success: true, data: config, message: "Page configuration reset to defaults" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ── EVENTS CONTROLLERS ── */
exports.getEvents = async (req, res) => {
  try {
    let events = await Event.find().sort({ order: 1, createdAt: 1 });
    if (!events || events.length === 0) {
      events = await Event.insertMany(defaultEvents);
    }
    res.json({ success: true, count: events.length, data: events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (!payload.categoryBn && payload.category && categoryBnMap[payload.category]) {
      payload.categoryBn = categoryBnMap[payload.category];
    }
    if (!payload.statusBn && payload.status && statusBnMap[payload.status]) {
      payload.statusBn = statusBnMap[payload.status];
    }
    const count = await Event.countDocuments();
    const newEvent = new Event({
      ...payload,
      order: payload.order !== undefined ? payload.order : count + 1,
    });
    const saved = await newEvent.save();
    res.status(201).json({ success: true, data: saved, message: "Event created successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (!payload.categoryBn && payload.category && categoryBnMap[payload.category]) {
      payload.categoryBn = categoryBnMap[payload.category];
    }
    if (!payload.statusBn && payload.status && statusBnMap[payload.status]) {
      payload.statusBn = statusBnMap[payload.status];
    }
    const updated = await Event.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.json({ success: true, data: updated, message: "Event updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.resetEvents = async (req, res) => {
  try {
    await Event.deleteMany({});
    const seeded = await Event.insertMany(defaultEvents);
    res.json({ success: true, count: seeded.length, data: seeded, message: "Default events restored" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ── GALLERY CONTROLLERS ── */
exports.getGallery = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category && req.query.category !== "All") {
      filter.category = req.query.category;
    }
    let items = await Gallery.find(filter).sort({ order: 1, createdAt: 1 });
    if (!items || items.length === 0) {
      items = await Gallery.insertMany(defaultGallery);
      if (req.query.category && req.query.category !== "All") {
        items = items.filter((i) => i.category === req.query.category);
      }
    }
    res.json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createGalleryItem = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (!payload.categoryBn && payload.category && categoryBnMap[payload.category]) {
      payload.categoryBn = categoryBnMap[payload.category];
    }
    const count = await Gallery.countDocuments();
    const newItem = new Gallery({
      ...payload,
      order: payload.order !== undefined ? payload.order : count + 1,
    });
    const saved = await newItem.save();
    res.status(201).json({ success: true, data: saved, message: "Gallery image added successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateGalleryItem = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (!payload.categoryBn && payload.category && categoryBnMap[payload.category]) {
      payload.categoryBn = categoryBnMap[payload.category];
    }
    const updated = await Gallery.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
    }
    res.json({ success: true, data: updated, message: "Gallery item updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteGalleryItem = async (req, res) => {
  try {
    const deleted = await Gallery.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
    }
    res.json({ success: true, message: "Gallery item deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.resetGallery = async (req, res) => {
  try {
    await Gallery.deleteMany({});
    const seeded = await Gallery.insertMany(defaultGallery);
    res.json({ success: true, count: seeded.length, data: seeded, message: "Default gallery restored" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ── IMGBB UPLOAD CONTROLLER ── */
exports.uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ success: false, message: "Image base64 or URL is required" });
    }

    const apiKey = process.env.IMGBB_API_KEY || "4d8f54c51bb726b496f79bc6709ddf3e";
    const params = new URLSearchParams();

    let cleanImage = image;
    if (typeof image === "string" && image.startsWith("data:image")) {
      // Strip data:image/...;base64, prefix
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
};
