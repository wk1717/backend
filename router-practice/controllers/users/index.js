import {Router} from "express";

class UserController{
    path = "/users";
    users = [
        {
            id: 1,
            name: "minkyo",
            age: "21",
        },
    ];

    router;
    constructor(){
        this.router = Router();
    }

    init(){
        this.router.get("/", )
    }

    getUsers(req, res){
        res.status(200).json({users: this.users});
    }

    getUser(req, res){
        const {id} = req.params;
        const user = this.users.find((user)=>user.id === Number(id));
        res.status(201).json({user});
    }

    createUser(req, res){
        const {name, age} = req.body;

        this.users.push({
            id: new Date().getTime(),
            name,
            age,
        });

        res.status(201).json({users: this.users});
    }
}

const userController = new UserController();
export default userController;