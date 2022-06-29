const http = require("http");

const handleRequest = (req, res) => {
    const dataSiswa = {
        nama: "pandu",
        kelas: "tk",
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(dataSiswa));
};
http.createServer(handleRequest).listen(8000);