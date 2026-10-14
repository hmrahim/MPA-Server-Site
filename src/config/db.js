const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI পাওয়া যায়নি। প্রজেক্ট রুটে .env ফাইলে MONGO_URI দাও।");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000, // ১০ সেকেন্ডে না পেলে error দেবে (hang করবে না)
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);

    if (/ENOTFOUND|querySrv|ECONNREFUSED/i.test(error.message)) {
      console.error("👉 ইন্টারনেট/DNS চেক করো। SRV (mongodb+srv) এ সমস্যা হলে অন্য নেটওয়ার্ক বা মোবাইল হটস্পট ট্রাই করো।");
    } else if (/whitelist|IP|Server selection timed out/i.test(error.message)) {
      console.error("👉 Atlas → Network Access → Add IP Address → 'Allow access from anywhere' (0.0.0.0/0) দাও।");
    } else if (/auth/i.test(error.message)) {
      console.error("👉 Atlas → Database Access এ username/password ঠিক আছে কিনা দেখো। পাসওয়ার্ডে বিশেষ চিহ্ন থাকলে URL-encode করো।");
    }
    process.exit(1);
  }
};

module.exports = connectDB;
