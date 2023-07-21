const app = require("./app");
const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://abramets:p4Jz0EUHoodLcAvK@cluster0.yjl44kj.mongodb.net/";
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
