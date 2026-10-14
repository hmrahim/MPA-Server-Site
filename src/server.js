// সবার আগে .env লোড করো (প্রজেক্ট রুট থেকে, যেখান থেকেই চালাও না কেন)
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

// DNS fix: mongodb+srv এর SRV lookup (querySrv ECONNREFUSED/ENOTFOUND) ঠিক করতে
// Node-কে Google ও Cloudflare DNS ব্যবহার করানো হচ্ছে (ISP/router DNS এড়িয়ে)
const dns = require("dns");
dns.setServers((process.env.DNS_SERVERS || "8.8.8.8,1.1.1.1,8.8.4.4").split(","));
dns.setDefaultResultOrder("ipv4first");

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
