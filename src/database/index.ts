import mongoose from "mongoose"
import { db } from "../config.js"

const dbURI = `mongodb://127.0.0.1:27017
/scaled`

mongoose
  .connect(dbURI)
  .then(() => "MongoDB Connected")
  .catch(err => console.log(err))
