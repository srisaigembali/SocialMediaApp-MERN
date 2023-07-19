import mongoose from "mongoose";

const ConnectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to mongodb`))
    .catch((error) =>
      console.log(`Error while connecting with mongodb ${error.message}`)
    );
};

export default ConnectDB;
