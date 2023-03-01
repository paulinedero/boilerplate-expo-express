const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// if dev mode
app.use(cors());

// routes
require("./routes")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
