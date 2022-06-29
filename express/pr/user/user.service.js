const { application } = require("express");

let userCollection = [];
let userId = 1;
const getUser = (req, res) => {
    return res.json(userCollection);
};
const fetchUSer = (req, res) => {
    const { userId } = req.params;
    let userFilter = userCollection.find((user) => user.id == userId);
    return res.json(userFilter);
};
const addUSer = (req, res) => {
    const newUSer = req.body;
    userCollection.push({
        id: userId,
        nama: newUSer.nama,
        password: newUSer.password,
    });
    userId++;
    return res.json(userCollection);
};
const editUSer = (req, res) => {};
const deleteUser = (req, res) => {
    const { userId } = req.params;
    let userDelete = userCollection.filter((user) => user.id != userId);

    return res.json(userDelete);
};

module.exports = { getUser, addUSer, editUSer, deleteUser, fetchUSer };