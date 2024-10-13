import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";
dotenv.config();
const app = express();
//morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//helmet
app.use(helmet());

//parse json body to req body

app.use(express.json());
//parse json request url
app.use(express.urlencoded({ extended: true }));

//sanitize request data

app.use(mongoSanitize());

//enable cookie parser
app.use(cookieParser());

//gzip compression
app.use(compression());

//fileupload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.post("/test", (req, res) => {
  res.send("Hello from server");
});
export default app;
