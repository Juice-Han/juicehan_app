const express = require('express');
const router = express.Router();
const tokenService = require('../jwt/index.js');

let users = [];

router.post('/register', (req, res) => {
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

router.post('/login', (req, res) => {
    const { id, password } = req.body;
    const user = users.find((user) => user.id === id);
    if (!user) {
        res.status(400).send({ message: '등록된 계정이 아닙니다.' });
        return;
    }
    if (user.password !== password) {
        res.status(400).send({ message: '잘못된 비밀번호입니다.' });
        return;
    }
    res.status(200).send({ token: tokenService.getToken(id) });
})

module.exports = router