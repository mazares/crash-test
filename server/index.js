const express = require(`express`);

const cors = require(`cors`);

const url = "http://192.168.0.213";

const port = 8000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

const datas = require("./db.json");

app.get(`/`, function (req, res) {
  console.log(`listening on ${url}:${port}`);
  res.send(datas[0].name);
});

app.listen(port);
