import mongoose from "mongoose";

const Connection = async (url) => {
  try {
    await mongoose.connect(`${url}`);
    console.log("Congrats! You connected to the database👋");
  } catch (err) {
    console.log("Error occurs during the database connection", err);
  }
};
export default Connection;
