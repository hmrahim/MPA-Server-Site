const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const sliderRoutes = require("./routes/sliderRoutes");
const headmasterRoutes = require("./routes/headmasterRoutes");
const academicGroupRoutes = require("./routes/academicGroupRoutes");
const routineRoutes = require("./routes/routineRoutes");
const facilityRoutes = require("./routes/facilityRoutes");
const clubRoutes = require("./routes/clubRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const topperRoutes = require("./routes/topperRoutes");
const resultRoutes = require("./routes/resultRoutes");
const eventRoutes = require("./routes/eventRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const schoolInfoRoutes = require("./routes/schoolInfoRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/headmaster", headmasterRoutes);
app.use("/api/academic-groups", academicGroupRoutes);
app.use("/api/routine", routineRoutes);
app.use("/api/facilities", facilityRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/toppers", topperRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/school-info", schoolInfoRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "MPA Server is healthy 🚀" });
});

app.get("/", (req, res) => {
  res.json({ message: "MPA Server is running 🚀" });
});

module.exports = app;
