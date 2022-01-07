const express = require("express");
const app = express();
app.use(express.json());
const port = 2000;
app.use("/", require("./routes/routes"));
app.listen(port, () => {
  console.log(`Listening to the ${port}`);
});
