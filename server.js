const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const http = require("http");
const MongoClient = require("mongoose");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect(
  "mongodb+srv://dan:NWsmH2ALWZY2rQL@cluster0.owjks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Error while connecting to database:", err));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
