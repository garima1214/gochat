import app from "./app.js";

//dot env config

//env variables

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is listening ${PORT}`);
});
