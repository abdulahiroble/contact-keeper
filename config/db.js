const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// async example
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
  }
};

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     })
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };

module.exports = connectDB;
