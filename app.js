import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app)
app.listen(process.env.PORT || 4000)