import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import {
  facultyListPage,
  facultyDetailPage,
} from "./src/controllers/faculty/faculty.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Tell Express where to find your templates
app.set("views", path.join(__dirname, "src/views"));
app.get("/faculty", facultyListPage);
app.get("/faculty/:facultyId", facultyDetailPage);

app.get("/", (req, res) => {
  const title = "Welcome Home";
  res.render("home", { title }); // <-- UPDATED
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
