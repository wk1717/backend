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
app.listen(8000, ()=>{
    console.log("Router 서버 시작");
})