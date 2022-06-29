const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => console.log("berjalan di port " + port));

app.get("/", (req, res) => {
    return res.send("alamat paLSU");
});

app.get("/katalog", (req, res) => {
    const katalog = [{
            nama: "pandu",
            alamat: "palsu",
        },
        {
            nama: "pandu",
            alamat: "palsu",
        },
    ];

    return res.json(katalog);
});