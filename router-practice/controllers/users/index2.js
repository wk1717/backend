// error미들웨어 추가
import { Router } from "express";

// Router
class UserController {
    path = "/users";
    users = [
        {
            id: 1,
            name: "minkyo",
            age: 21,
        },
    ];

    router;
    constructor(){
        this.router = Router();
    }

    init() {
        this.router.get("/", this.getUsers.bind(this)); // getUsers함수 내부에서 this를 사용할 수 있게 bind
        this.router.get("/detail/:id", this.getUser.bind(this));
        this.router.post("/", this.createUser.bind(this));
    }

    getUsers(req, res, next){
        try {
            res.status(200).json({users: this.users});
        } catch(err){
            next(err);
        }
    }

    getUser(req, res, next){
        try{
            const {id} = req.params;

            const user = this.users.find((user)=>user.id === Number(id));

            if (!user){
                throw{status:404, message: "유저를 찾을 수 없습니다. "};
            }

            res.status(200).json({user});
        } catch(err) {
            next(err);
        }
    }

    createUser(req, res, next){
        try{
            const {name, age} = req.body;

            if (!name){
                throw{status: 400, message: "이름이 없습니다."};
            }
            if (!age){
                throw{status: 400, message: "나이가 없습니다."};
            }

            this.users.push({
                id: new Date().getTime(),
                name,
                age,
            });

            res.status(201).json({ users: this.users });
        } catch (err){
            next(err);
        }
    }
}

const userController = new UserController();
userController.init();
export default userController;

