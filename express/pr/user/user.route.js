const { Router } = require("express");
const express = require("express");
const app = express();
const {
    getUser,
    addUSer,
    editUSer,
    deleteUser,
    fetchUSer,
} = require("./user.service");
const userRoute = express.Router();
userRoute.get("/users", getUser);
userRoute.get("/users/:userId", fetchUSer);
userRoute.post("/users", addUSer);
userRoute.delete("/users/:userId", deleteUser);
// userRoute.post("/users", addUSer);

module.exports = userRoute;