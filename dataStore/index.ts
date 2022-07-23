import { CommentDao } from "./commentDao";
import { likeDao } from "./likeDao";
import { PostDao } from "./postDao";
import { UserDao } from "./userDao";



export interface dateStore extends CommentDao,PostDao,UserDao,likeDao {}