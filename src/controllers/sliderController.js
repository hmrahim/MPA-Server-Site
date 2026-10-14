const Slider = require("../models/sliderModel");

const defaultInitialSlides = [
  {
    title: "Knowledge, Character & Excellence in Secondary Education",
    titleBn: "নৈতিক চরিত্র, মেধা ও মানবিক মূল্যবোধের বিকাশ",
    subtitle: "Mirashani Academy provides premier general secondary education across Science, Commerce & Arts with modern labs and passionate teachers.",
    subtitleBn: "মিরাশানী একাডেমি আধুনিক মাল্টিমিডিয়া ক্লাসরুম, সমৃদ্ধ বিজ্ঞানাগার এবং অভিজ্ঞ শিক্ষকমণ্ডলীর মাধ্যমে সাধারণ মাধ্যমিক শিক্ষায় অগ্রণী ভূমিকা পালন করছে।",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=85",
    badge: "Morning Assembly & Campus Life",
    badgeBn: "প্রাত্যহিক সমাবেশ ও সুশৃঙ্খল ক্যাম্পাস জীবন",
    date: "Academic Session 2026-2027",
    dateBn: "শিক্ষাবর্ষ ২০২৬-২০২৭",
    btn1Show: true,
    btn1Text: "Explore Academics",
    btn1TextBn: "শিক্ষা কার্যক্রম দেখুন",
    btn1Link: "/academics",
    btn2Show: true,
    btn2Text: "Check Result",
    btn2TextBn: "ফলাফল অনুসন্ধান",
    btn2Link: "/results",
    btn3Show: true,
    btn3Text: "Online Admission",
    btn3TextBn: "অনলাইন ভর্তি",
    btn3Link: "/admission",
    order: 1,
    isActive: true,
  },
  {
    title: "Advanced Science Labs & Practical Discovery",
    titleBn: "আধুনিক বিজ্ঞানাগার ও বাস্তবমুখী বিজ্ঞান চর্চা",
    subtitle: "Dedicated air-conditioned laboratories for Physics, Chemistry and Biology where students discover the beauty of science hands-on.",
    subtitleBn: "পদার্থবিজ্ঞান, রসায়ন ও জীববিজ্ঞানের পৃথক শীতাতপ নিয়ন্ত্রিত ল্যাবরেটরি, যেখানে শিক্ষার্থীরা হাতে-কলমে পরীক্ষার মাধ্যমে বিজ্ঞানের আনন্দ আবিষ্কার করে।",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=85",
    badge: "Science Fair & Olympiads",
    badgeBn: "বিজ্ঞান মেলা ও অলিম্পিয়াড",
    date: "Lab Work Daily",
    dateBn: "নিয়মিত প্র্যাকটিক্যাল ল্যাব",
    btn1Show: true,
    btn1Text: "Science Group Info",
    btn1TextBn: "বিজ্ঞান বিভাগ জানুন",
    btn1Link: "/academics",
    btn2Show: true,
    btn2Text: "View Facilities",
    btn2TextBn: "সুযোগ-সুবিধা দেখুন",
    btn2Link: "/academics",
    btn3Show: true,
    btn3Text: "Apply for Admission",
    btn3TextBn: "ভর্তি আবেদন",
    btn3Link: "/admission",
    order: 2,
    isActive: true,
  },
  {
    title: "Rich Central Library & World of Books",
    titleBn: "সমৃদ্ধ কেন্দ্রীয় পাঠাগার ও উন্মুক্ত জ্ঞানভাণ্ডার",
    subtitle: "Over 10,000 national and international books, science encyclopedias, and literature building deep reading habits.",
    subtitleBn: "১০,০০০ এরও বেশি দেশি-বিদেশি সাহিত্য, পাঠ্যবই, বিশ্বকোষ ও বিজ্ঞান সাময়িকী সমৃদ্ধ পাঠাগার যা শিক্ষার্থীদের গভীর পাঠাভ্যাস গড়ে তোলে।",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=85",
    badge: "Open Daily 8 AM - 4 PM",
    badgeBn: "জ্ঞান ও পাঠাভ্যাস",
    date: "Over 10,000+ Books",
    dateBn: "১০,০০০+ বই সংগ্রহ",
    btn1Show: true,
    btn1Text: "Library Tour",
    btn1TextBn: "লাইব্রেরি পরিদর্শন",
    btn1Link: "/academics",
    btn2Show: true,
    btn2Text: "Student Portal",
    btn2TextBn: "শিক্ষার্থী পোর্টাল",
    btn2Link: "/student-dashboard",
    btn3Show: false,
    btn3Text: "Online Admission",
    btn3TextBn: "অনলাইন ভর্তি",
    btn3Link: "/admission",
    order: 3,
    isActive: true,
  },
  {
    title: "Annual Sports Tournament & Championship",
    titleBn: "বার্ষিক আন্তঃহাউস ক্রীড়া প্রতিযোগিতা ও চ্যাম্পিয়নশিপ",
    subtitle: "Vibrant athletic meets, football cups, cricket tournaments, sprinting, and physical fitness training on our expansive green field.",
    subtitleBn: "বিশাল সবুজ খেলার মাঠে ১০০ মিটার স্প্রিন্ট, ফুটবল লিগ, ক্রিকেট টুর্নামেন্ট, হাই জাম্প ও শরীরচর্চা প্রতিযোগিতার প্রাণবন্ত আসর।",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1920&q=85",
    badge: "Sports & Physical Fitness",
    badgeBn: "ক্রীড়া ও শারীরিক প্রশিক্ষণ",
    date: "Annual Tournament",
    dateBn: "বার্ষিক ক্রীড়া উৎসব",
    btn1Show: true,
    btn1Text: "Sports & Clubs",
    btn1TextBn: "খেলাধুলা ও শরীরচর্চা",
    btn1Link: "/events",
    btn2Show: true,
    btn2Text: "School Events",
    btn2TextBn: "স্কুল ইভেন্টস",
    btn2Link: "/events",
    btn3Show: true,
    btn3Text: "Contact School",
    btn3TextBn: "যোগাযোগ করুন",
    btn3Link: "/contact",
    order: 4,
    isActive: true,
  },
];

const SliderController = {
  // GET /api/sliders (All slides for dashboard admin)
  getAllSliders: async (req, res) => {
    try {
      let sliders = await Slider.find().sort({ order: 1, createdAt: -1 });
      
      // Auto-seed if completely empty
      if (sliders.length === 0) {
        sliders = await Slider.insertMany(defaultInitialSlides);
      }

      res.status(200).json({ success: true, count: sliders.length, data: sliders });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // GET /api/sliders/active (Only active slides for public website)
  getActiveSliders: async (req, res) => {
    try {
      let sliders = await Slider.find({ isActive: true }).sort({ order: 1, createdAt: -1 });

      // Auto-seed if completely empty
      if (sliders.length === 0) {
        const seeded = await Slider.insertMany(defaultInitialSlides);
        sliders = seeded.filter((s) => s.isActive);
      }

      res.status(200).json({ success: true, count: sliders.length, data: sliders });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // GET /api/sliders/:id
  getSliderById: async (req, res) => {
    try {
      const slider = await Slider.findById(req.params.id);
      if (!slider) {
        return res.status(404).json({ success: false, message: "Slide not found" });
      }
      res.status(200).json({ success: true, data: slider });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/sliders (Create new slide)
  createSlider: async (req, res) => {
    try {
      const {
        title,
        titleBn,
        subtitle,
        subtitleBn,
        imageUrl,
        badge,
        badgeBn,
        date,
        dateBn,
        // Button 1
        btn1Show,
        btn1Text,
        btn1TextBn,
        btn1Link,
        // Button 2
        btn2Show,
        btn2Text,
        btn2TextBn,
        btn2Link,
        // Button 3
        btn3Show,
        btn3Text,
        btn3TextBn,
        btn3Link,
        // Legacy fallbacks
        primaryBtnText,
        primaryBtnTextBn,
        primaryBtnLink,
        secondaryBtnText,
        secondaryBtnTextBn,
        secondaryBtnLink,
        order,
        isActive,
      } = req.body;

      if (!title || !imageUrl) {
        return res.status(400).json({
          success: false,
          message: "Title and Image URL are required",
        });
      }

      // If order not given, set to highest + 1
      let slideOrder = Number(order);
      if (isNaN(slideOrder)) {
        const last = await Slider.findOne().sort({ order: -1 });
        slideOrder = last ? last.order + 1 : 1;
      }

      const newSlider = await Slider.create({
        title,
        titleBn: titleBn || title,
        subtitle: subtitle || "",
        subtitleBn: subtitleBn || subtitle || "",
        imageUrl,
        badge: badge || "Campus Highlights",
        badgeBn: badgeBn || badge || "ক্যাম্পাস হাইলাইটস",
        date: date || "Session 2026-2027",
        dateBn: dateBn || date || "শিক্ষাবর্ষ ২০২৬-২০২৭",
        // Button 1
        btn1Show: btn1Show !== undefined ? Boolean(btn1Show) : true,
        btn1Text: btn1Text || primaryBtnText || "Explore Academics",
        btn1TextBn: btn1TextBn || primaryBtnTextBn || "শিক্ষা কার্যক্রম দেখুন",
        btn1Link: btn1Link || primaryBtnLink || "/academics",
        // Button 2
        btn2Show: btn2Show !== undefined ? Boolean(btn2Show) : true,
        btn2Text: btn2Text || secondaryBtnText || "Check Result",
        btn2TextBn: btn2TextBn || secondaryBtnTextBn || "ফলাফল অনুসন্ধান",
        btn2Link: btn2Link || secondaryBtnLink || "/results",
        // Button 3
        btn3Show: btn3Show !== undefined ? Boolean(btn3Show) : true,
        btn3Text: btn3Text || "Online Admission",
        btn3TextBn: btn3TextBn || "অনলাইন ভর্তি",
        btn3Link: btn3Link || "/admission",
        order: slideOrder,
        isActive: isActive !== undefined ? isActive : true,
      });

      res.status(201).json({ success: true, message: "Slide created successfully", data: newSlider });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/sliders/:id (Update slide)
  updateSlider: async (req, res) => {
    try {
      const updatedSlider = await Slider.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!updatedSlider) {
        return res.status(404).json({ success: false, message: "Slide not found" });
      }

      res.status(200).json({ success: true, message: "Slide updated successfully", data: updatedSlider });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE /api/sliders/:id
  deleteSlider: async (req, res) => {
    try {
      const deleted = await Slider.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: "Slide not found" });
      }
      res.status(200).json({ success: true, message: "Slide deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /api/sliders/reorder (Batch update orders)
  reorderSliders: async (req, res) => {
    try {
      const { items } = req.body; // array of { id, order }
      if (!Array.isArray(items)) {
        return res.status(400).json({ success: false, message: "Items must be an array" });
      }

      const updates = items.map((item) =>
        Slider.findByIdAndUpdate(item.id, { $set: { order: item.order } })
      );
      await Promise.all(updates);

      const refreshed = await Slider.find().sort({ order: 1 });
      res.status(200).json({ success: true, message: "Order updated successfully", data: refreshed });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/sliders/seed (Reset / seed defaults)
  seedDefaultSliders: async (req, res) => {
    try {
      await Slider.deleteMany({});
      const seeded = await Slider.insertMany(defaultInitialSlides);
      res.status(200).json({
        success: true,
        message: "Default slides successfully seeded",
        data: seeded,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/sliders/upload-image (Upload image to ImgBB)
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
        // Strip data:image/...;base64, prefix
        cleanImage = image.split(",")[1] || image;
      } else if (typeof image === "string" && (image.startsWith("http://") || image.startsWith("https://"))) {
        // External URL — fetch and convert to base64 for reliable ImgBB upload
        try {
          const imgResponse = await fetch(image);
          if (imgResponse.ok) {
            const buffer = await imgResponse.arrayBuffer();
            cleanImage = Buffer.from(buffer).toString("base64");
          }
          // If fetch fails, fall through and try the URL directly
        } catch {
          // Fall through — will try URL string directly
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

module.exports = SliderController;
