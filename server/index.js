// Execute "npm start" (node server/index.js)
const express = require("express");
const path = require('path');


// Express app PORT 3001 - React app PORT 3000 (standard)
const PORT = process.env.PORT || 3001;

const app = express();

// Serve files in /build folder of React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// *** Router ***
// GET /api (This code allows our React and Express app to be deployed together on the same domain)
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// GET /* (fallback to /build/index.html)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});