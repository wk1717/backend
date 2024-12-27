import express, {Router} from 'express';

import cors from 'cors';
import helmet from 'helmet';

let users = [
    {
        id: 1,
        name: "minkyo",
        age: 21,
    },
];

const app = express();

//미들웨어
app.use(cors({
    origin: "*",
}));//모든 접근 허용
app.use(helmet());//보안강화
app.use(express.json()); //json형식의 데이터 처리
app.use(express.urlencoded({extended: true, limit: "700mb"}));

const UserRouter = Router();

// GET /users => 전체 유저를 조회회
UserRouter.get("/", (req, res)=> {
    res.status(200).json({users});
});

// GET /users/detail/:id
// 유저 한명을 불러오는 API
UserRouter.get("/detail/:id", (req, res)=>{ //:뒤에는 어떤값이든 쓸 수 있고 콜백함수를 통해 그 값을 뽑아냄
    const{id} = req.params;

    const target = users.find((user)=>user.id === Number(id));

    res.status(200).json({target});
});

// POST /users
// 유저를 생성하는 API
UserRouter.post("/", (req, res)=>{
    const { name, age } = req.body;

    users.push({
        id: new Date().getTime(),
        name,
        age,
    });

    res.status(201).json({users});
})



app.get("/", (req, res) => {
    res.send("nodejs");
});

app.listen(8000, () => {
    console.log("서버가 시작되었습니다");
});
