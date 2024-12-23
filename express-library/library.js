import express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import dayjs from 'dayjs';

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());
app.use(helmet);

const today = new Date();
const todayToDayjs = dayjs(today).format("YYYY년 MM월 DD일");
console.log({today, todayToDayjs});

const password = "1234";
const hashedPassword = bcrypt.hashSync(password, 10); //bcrypt 해싱 함수가 2^10 = 1024번의 연산을 수행
console.log({password, hashedPassword});

const token = jwt.sign(password, "asdfjsdf");
console.log({token});
