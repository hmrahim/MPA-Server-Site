const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    titleBn: {
      type: String,
      trim: true,
      default: "",
    },
    dateBadge: {
      type: String,
      trim: true,
      default: "OCT 10",
    },
    fullDate: {
      type: String,
      trim: true,
      default: "10 Oct 2026",
    },
    fullDateBn: {
      type: String,
      trim: true,
      default: "১০ অক্টো ২০২৬",
    },
    time: {
      type: String,
      trim: true,
      default: "9:00 AM - 12:30 PM",
    },
    timeBn: {
      type: String,
      trim: true,
      default: "সকাল ৯:০০ - দুপুর ১২:৩০",
    },
    location: {
      type: String,
      trim: true,
      default: "Main Academic Building & Examination Halls",
    },
    locationBn: {
      type: String,
      trim: true,
      default: "প্রধান একাডেমিক ভবন ও পরীক্ষা হল",
    },
    desc: {
      type: String,
      trim: true,
      default: "",
    },
    descBn: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
      trim: true,
      default: "Academic",
    },
    categoryBn: {
      type: String,
      trim: true,
      default: "একাডেমিক",
    },
    image: {
      type: String,
      trim: true,
      default: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
    status: {
      type: String,
      trim: true,
      default: "Upcoming",
    },
    statusBn: {
      type: String,
      trim: true,
      default: "আসন্ন",
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

const eventPageConfigSchema = new mongoose.Schema(
  {
    // Page Banner (Hero)
    badge: {
      type: String,
      default: "Campus Vibrancy & Student Life",
      trim: true,
    },
    badgeBn: {
      type: String,
      default: "ক্যাম্পাস জীবন ও উৎসবের মুহূর্ত",
      trim: true,
    },
    title: {
      type: String,
      default: "Events Calendar & Photo Gallery",
      trim: true,
    },
    titleBn: {
      type: String,
      default: "ইভেন্ট ক্যালেন্ডার ও ফটো গ্যালারি",
      trim: true,
    },
    subtitle: {
      type: String,
      default:
        "Explore our colorful campus festivities: from athletic championships and robotics exhibitions to national day celebrations and graduation ceremonies.",
      trim: true,
    },
    subtitleBn: {
      type: String,
      default:
        "বার্ষিক ক্রীড়া প্রতিযোগিতা, বিজ্ঞান মেলা, সাংস্কৃতিক উৎসব ও জাতীয় দিবস উদযাপনের স্মৃতির অ্যালবাম।",
      trim: true,
    },

    // Events Section Header
    eventsBadge: {
      type: String,
      default: "School Calendar",
      trim: true,
    },
    eventsBadgeBn: {
      type: String,
      default: "একাডেমিক ক্যালেন্ডার",
      trim: true,
    },
    eventsTitle: {
      type: String,
      default: "Academic Calendar & Upcoming Events",
      trim: true,
    },
    eventsTitleBn: {
      type: String,
      default: "একাডেমিক ক্যালেন্ডার ও আসন্ন অনুষ্ঠান",
      trim: true,
    },
    eventsSubtitle: {
      type: String,
      default:
        "Stay updated with scheduled examinations, science olympiads, cultural meets, and national day observances.",
      trim: true,
    },
    eventsSubtitleBn: {
      type: String,
      default:
        "পরীক্ষার সময়সূচি, বিজ্ঞান অলিম্পিয়াড, সাংস্কৃতিক সমাবেশ ও জাতীয় দিবসের সময়সূচি।",
      trim: true,
    },

    // Gallery Section Header
    galleryBadge: {
      type: String,
      default: "Memories & Moments",
      trim: true,
    },
    galleryBadgeBn: {
      type: String,
      default: "স্মৃতি ও সোনালী মুহূর্ত",
      trim: true,
    },
    galleryTitle: {
      type: String,
      default: "Campus Life Photo Gallery",
      trim: true,
    },
    galleryTitleBn: {
      type: String,
      default: "ক্যাম্পাস জীবন ফটো গ্যালারি",
      trim: true,
    },
    gallerySubtitle: {
      type: String,
      default: "Click any image to view in high definition lightbox",
      trim: true,
    },
    gallerySubtitleBn: {
      type: String,
      default: "পূর্ণাঙ্গ আকারে দেখতে যেকোনো ছবিতে ক্লিক করুন",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const EventPageConfig = mongoose.model("EventPageConfig", eventPageConfigSchema);

module.exports = Event;
module.exports.Event = Event;
module.exports.EventPageConfig = EventPageConfig;
