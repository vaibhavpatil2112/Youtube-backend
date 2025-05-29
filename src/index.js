// require('dotenv').config({path: './env'})         Old method don't use

import dotenv from "dotenv";
import connectDB from "./db/database.js";
import express from "express";

dotenv.config({
  path: "./env",
});

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port :  ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!!", err);
  });

// function connectDB(){}    old approch
// connectDB()

/*
const app = express()(


  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

      app.on("error", (error) => {
        console.log("ERROR", error);                                          
        throw error;
      });
                                                                                      //    good approach

      app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR", error);
      throw err;
    }
  }
)
// ();
*/
