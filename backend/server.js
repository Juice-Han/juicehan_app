const express = require('express');
const app = express();
require("dotenv").config();
app.listen(8080, () => {
  console.log('8080 포트에서 서버 실행중');
})

const client_id = process.env.PAPAGO_CLIENT_ID;
const client_secret = process.env.PAPAGO_CLIENT_SECRET
let query = "만나서 반갑습니다. 배고픈데 밥 먹으러 가실래요?";
app.get('/translate', function (req, res) {
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  const data = JSON.stringify({ source: "ko", target: "en", text: query})
  console.log(data);
  const opt = {
    method: "POST",
    headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    },
    body: data
  }
  fetch(api_url, opt)
    .then(async (res) => {
      console.log(await res.json());
    })
    .catch((err) => {
      console.error(err)
    })
});

app.get('/', (req, res) => {
  res.send('Hello world!');
})