import winston from "winston"

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  return "debug";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "blue",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.printf(
    (log) => `${log.timestamp} ${log.level}: ${log.message}`
  )
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: "server.log" }),
];

const logger = winston.createLogger({
  level: level(),
  levels: levels,
  format: format,
  transports: transports,
});

export default logger;
