import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Tell Express where to find your templates
app.set("views", path.join(__dirname, "src/views"));

app.get("/", (req, res) => {
  const title = "Welcome Home";
  res.render("home", { title }); // <-- UPDATED
});

app.get("/about", (req, res) => {
  const title = "About Me";
  res.render("about", { title });
});
app.get("/products", (req, res) => {
  const title = "Our Products";
  res.render("products", { title });
});

app.get("/student", (req, res) => {
  const studentData = {
    Name: "Mineny Araya",
    Id: "446139399",
    Email: "ara22007@byui.edu",
    Address: "777 E 15th St, apt 418, EDmond Ok. 73013",
  };

  res.render("student", { title: "Student Record", student: studentData });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
