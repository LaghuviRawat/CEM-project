import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path"; // Import the path module for file path handling
import cors from "cors"; // Import CORS for cross-origin requests (essential during local development)
import { port } from "./config/index.js";
import loader from "./loaders/index.js";
import router from "./api/routes/events.js" // Assuming this contains your event routes

const app = express();

// --- Configuration Setup ---

// Enable CORS for all routes (to prevent common issues in development)
app.use(cors());

// Loaders and JSON body parser
loader(app);
app.use(express.json());

// --- Frontend File Serving ---

// Define the path to your frontend's 'public' folder.
// Assumes app.js is in CEM-backend/ and index.html is in CEM-frontend/public/
const frontendPath = path.join(path.resolve(), '..', 'CEM-frontend', 'public');

// Serve static files (HTML, CSS, JS) from the frontend directory
app.use(express.static(frontendPath));

// --- API Routing ---

// Mount the router under the '/api' prefix. 
// This ensures the frontend's fetch('/api/entries') hits the correct endpoint.
app.use("/api", router); 

// --- Catch-all for Client-Side Routing ---

// Any request not handled by the static files or the /api router 
// should serve the index.html file. This is crucial for single-page applications.
app.get('*', (req, res) => {
  // Check if the request is trying to hit an API path, if so, let the 404 handler take over
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ message: "API endpoint not found" });
  }
  res.sendFile(path.join(frontendPath, 'index.html'));
});


// --- Server Listener ---

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

export default app;


// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import { port } from "./config/index.js";
// import loader from "./loaders/index.js";
// import router from "./api/routes/events.js"
// const app = express();

// loader(app);
// app.use(express.json());
// app.use("/", router);
// app.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//     return process.exit(1);
//   }
//   console.log(`Server is running on ${port}`);
// });

// export default app;
