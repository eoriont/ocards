const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set("views", "./views");
app.set("view engine", "pug");
app.use('/games', express.static("games"))

app.get('/', (req, res) => {
    res.render("index", { title: "Home page", message: "Hello world!" });
})

app.get('/play/:id', (req, res) => {
    res.render(req.params.id)
})

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})