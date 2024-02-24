const express = require('express');
const app = express();
const cors = require('cors');
const tokenService = require('./jwt');
const userRouter = require('./routes/user.js')
require("dotenv").config();

let corsOptions = {
  origin: 'http://localhost:5173',
  credential: true
}

app.use(express.json());
app.use(cors(corsOptions));

const client_id = process.env.PAPAGO_CLIENT_ID;
const client_secret = process.env.PAPAGO_CLIENT_SECRET

app.listen(8080, () => {
  console.log('8080 포트에서 서버 실행중');
})

app.use('/user',userRouter);

app.post('/papago/translate', function (req, res) {
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  const data = JSON.stringify({ source: "ko", target: "en", text: req.body.content })
  const opt = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    },
    body: data
  }
  fetch(api_url, opt)
    .then(async (response) => {
      res.send(await response.json());
    })
    .catch((err) => {
      console.error(err)
    })
});