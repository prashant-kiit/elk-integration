import express from "express";
import morgan from "./morgan.js"
import logger from "./logger.js";

const server = express();

const HOST = "0.0.0.0";
const PORT = "8000";

const data = [
  {
    name: "Prashant",
    address: "Ranchi",
  },
  {
    name: "Chinku",
    address: "Delhi",
  },
];

server.use(morgan);

server.get("/", (req, res) => {
  try {
    logger.info("GET API");
    res.status(200).json({
      message: "Successful",
      body: data,
    });
  } catch (error: any) {
    logger.error(error.message);
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening at http://${HOST}:${PORT}`);
});
