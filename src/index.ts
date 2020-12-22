import app from "./app";
import log from "./log";

const PORT = 3000;
const _onConnect = (port: number) =>
  log.info(`[Server] started on port ${port} 🚀`);
const _onError = (error: Error) =>
  log.error(`[Server] ERROR ${error} 🔥 :fire`);

app
  .listen(PORT)
  .on("listening", () => _onConnect(PORT))
  .on("error", _onError);
