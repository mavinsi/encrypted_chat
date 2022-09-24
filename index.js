console.log(`Starting encrypted chat`)
const express = require("express");
const os = require("os")
const { Socket } = require("socket.io");
const app = express();
var http = require("http").createServer(app)
const io = require("socket.io")(http)

io.on("connection", (socket) => {
    console.log(`[+] ${socket.id} Conectou-se`)
    socket.on("disconnect", () => {
        console.log(`[-] ${socket.id} Desconectou-se`)
    })

     socket.on("msg", (data) => {
        io.emit("showmsg", data)
        console.table(data)
     })
})



app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log(`App running on: http://localhost:3000`)
})