import express from "express";
import { Edge } from "edge.js";
import path from "path";

import routes from "./app/Routes/web.js";

const app = express();
const port = process.env.PORT || 8080;
const currentDir = import.meta.dirname;

app.use(express.static(path.join(currentDir, "public")));

// Create Edge instance with caching for production
const edge = Edge.create({
  cache: process.env.NODE_ENV === "production",
});

// Mount the views directory
edge.mount(new URL("./app/Views", import.meta.url));

// Configure Express to use Edge as the view engine
app.engine("edge", async (filePath, data, callback) => {
  // Use async/await to render templates that use `await` inside Edge templates
  try {
    const html = await edge.render(filePath, data);
    callback(null, html);
  } catch (err) {
    callback(err);
  }
});

app.set("view engine", "edge");
app.set("views", "./app/Views");

app.use("/", routes);

// errors
app.use((req, res) => {
  res.status(404).render("errors/error", {
    code: 404,
    title: "Not Found",
    message: "Oops! The page you are looking for does not exist.",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("errors/error", {
    code: 500,
    title: "Server Error",
    message: "Something went wrong. Please try again later.",
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
