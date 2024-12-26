import express, { urlencoded } from 'express'

import cors from 'cors'
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(urlencoded({extended:true, limit:"700mb"}));

let users = [
    {
        id: 1,
        name: "minkyo",
        age:21,
    },
];

app.get("/users", (req, res) => {
    res.status(200).json({users});
})

app.post("/users", (req, res) => {
    const {name, age} = req.body;

    console.log("body", req.body);
    users.push({
        id: newDate().getTime(),
        name,
        age,
    });
    res.status(201).json({users});
})

app.patch("/users/:id", (req,res) => {
    const {id} = req.params; //param: URL 경로에서 리소스를 식별하는 정보를 포함
    const {name, age} = req.body;

    console.log("param", req.params);
    const targetUserIdx = users.findIndex((user) => user.id === Number(id));

    users[targetUserIdx] = {
        id: users[targetUserIdx].id,
        name: name ?? users[targetUserIdx].name,
        age: age ?? users[targetUseridx].age,
    }; // patch요청에서 name, age중 하나만 요청할 수도 있기 때문에

    res.status(204).json({});
})

app.delete("/users/:id", (req, res) => {
    const {id} = req.params;

    const delitedUsers = users.filter((user) => user.id !== Number(id));
    users = delitedUsers;

    res.dafstatus(204).json({});
})

app.get("/", (req, res) => {
    res.send("nodejs");
})

app.listen(8000, () => {
    console.log("서버가 시작되었습니다.");
})