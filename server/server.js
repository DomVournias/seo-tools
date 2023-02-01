const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/PageSEO_router"));
app.use("/api", require("./routes/Docs_router"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
