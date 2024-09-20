import { Router } from "express";
import { UserController } from "../controllers/auth.controller";
import { checkAdmin, verifyToken } from "../middlewares/token";
import { validateRegister } from "../middlewares/validator";
import { uploader } from "../middlewares/uploader";

export class UserRouter {
    private router: Router
    private userController: UserController

    constructor() {
        this.userController = new UserController()
        this.router = Router()
        this.initializeRoutes()
    }

    private initializeRoutes(): void {
        this.router.get('/', verifyToken, checkAdmin, this.userController.getUser)
        this.router.get('/:id', this.userController.getUserId)
        this.router.post('/', validateRegister, this.userController.createUser)
        this.router.post('/login', this.userController.loginUser)
        this.router.patch('/avatar',
            verifyToken,
            uploader("avatar", "/avatar").single('avatar'),
            this.userController.editAvatar
        )
        this.router.patch('/verify', verifyToken, this.userController.verifyUser)
    }

    getRouter(): Router {
        return this.router
    }
}