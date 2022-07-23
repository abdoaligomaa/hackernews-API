export interface User{
    createUser(user:User):void
    getUserByEmail(email:string):User
    getUserByUserName(username:string):User
}

