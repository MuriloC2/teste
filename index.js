import express from "express";
import mongoose from "mongoose";

import User from "./Models/User";

const app = express();

app.use(express.json());

const users = [];

app.get("/users", async (request, response) => {
  const users = await User.find();

  return response.status(200).json(users);
});

app.post("/users", async (request, response) => {
  const user = request.body;

  const newUser = await User.create(user);

  return response.status(201).json(newUser);
});

mongoose
  .connect(
    
  )
  .then(() => console.log("Database connected."))
  .catch(() => console.log("Error connecting database"));

app.listen(3000);
