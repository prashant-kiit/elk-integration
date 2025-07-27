import morgan from "morgan";
import logger from "./logger.js";

const stream = {
  write: (message: string) => logger.http(message),
};

const morganMiddleware = morgan(
  ":remote-addr :method :url :status",
  { stream }
);

export default morganMiddleware;