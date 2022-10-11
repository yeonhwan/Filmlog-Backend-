const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");

// mongoos Post, Comment, User 모델 import
const {Post} = require("./Models/Post");
const {Comment} = require("./Models/Comment");
const {User} = require("./Models/User");

console.log(User);

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/filmlog"); //mongoDB connect

    app.use(express.static(path.join(__dirname, "/build"))); // express middleware를 통해 전달해줄 pages 디렉토리 설정
    app.use(express.urlencoded({ extended: true })); // URLencoded 옵션을 통해 body parse
    app.use(express.json()); // HTTP raw data를 express 내장 body-parser를 통해 req.body fill in
    app.use(cors()); // CORS module을 사용해 cors 오류를 방지 (서버를 다른 포트로 두고  있어서 발생)

    app.post("/signup", async (req, res) => { // post 요청받아서 mongoose 모델을 통해 mongoDB (filmlog)에 삽입
      console.log(req.body);
      const { username, password } = req.body;

      const newUser = new User({ 
        username : username,
        password : password
       })
      await newUser.save();
      res.send('saved to a database');
    });

    app.get("/", (req, res) => { // 현재 기본 홈페이지 GET 응답np
      res.sendFile(path.join(__dirname, "index.html"));
    });

    app.listen(8000, () => { // localhost:3000을 서버로 사용중
      console.log("hosting on localhost 8000");
    });
  } catch (err) {
    console.log("error occured : ", err);
  }
}

main();
