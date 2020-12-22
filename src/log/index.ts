import { createLogger, format, transports } from "winston";

const { combine, colorize, printf } = format;

const timestamp = () => new Date().toLocaleTimeString();

const formatTemplate = printf((info: any) => {
  return `${timestamp()} ${info.level}: ${info.message}`;
});

const log = createLogger({
  level: "info",
  format: combine(colorize(), formatTemplate),
  transports: [new transports.Console()],
  exitOnError: false,
});

export default log;
