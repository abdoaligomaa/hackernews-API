import { User } from "../types"

export interface UserDao{
    createUser(user:User):void
    getUserByEmail(email:string):User
    getUserByUserName(username:string):User
}

