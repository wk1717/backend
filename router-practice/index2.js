import express from "express";

import cors from "cors";
import helmet from "helmet";
import Controllers from './controllers';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "700mb"}));

Controllers.forEach((controller)=>{
    app.use(controller.path, controller.router);
})

app.get("/", (req, res)=>{
    res.send("nodejs");
})

//미들웨어 등록
app.use((err, req, res, next)=>{
    console.log(err);

    res.status(err.status || 500) //err의 status가 있으면 status사용, 없으면 500사용
    .json({message : err.message || "서버에서 에러가 발생했습니다."}); // throw로 던져지지 않으면 err가 비기 때문에에
})

app.listen(8000, ()=>{
    console.log("Router 서버 시작");
})
