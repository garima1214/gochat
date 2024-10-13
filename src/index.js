import app from "./app.js";
import dotenv from "dotenv";

//dot env config

dotenv.config();

//env variables

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is listening ${PORT}`);
});
