import mongoose from "mongoose"

export const webmigoDB = () => {mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "webmigo",
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  })
}
