const express = require("express");
const app = express();
const port = 8000;
const userRoute = require("./user/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);

app.get("/", (req, res) => {
    return res.send("ini halaman depan");
});
app.listen(port, () => {
    console.log("berhasil");
});