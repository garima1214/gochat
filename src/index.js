import app from "./app.js";
import logger from "../configs/logger.config.js";
//dot env config

//env variables

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`server is listening ${PORT}`);
});
