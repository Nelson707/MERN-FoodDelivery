import express from "express"
import { LoginUser,RegisterUser } from "../controllers/UserController.js"

const userRouter = express.Router()

userRouter.post("/register",RegisterUser)
userRouter.post("/login",LoginUser)

export default userRouter