const express = require('express');
const app = express();
const cors = require('cors');
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

app.get('/', (req, res) => {
  res.send('Hello world!');
})

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

let users = [];

app.post('/user/register', (req, res) => {
  const { id, password, name } = req.body;
  if (!id || !password || !name) {
    res.status(400).send({ message: '필수 입력사항을 제대로 입력해주세요.' });
    return;
  }
  if (users.find((user) => user.id === id)) {
    res.status(400).send({ message: '아이디가 중복됩니다. 다른 아이디를 사용해주세요.' });
    return;
  }
  users.push({ id, password, name });
  res.status(200).json({ message: '계정 생성 완료' });
})