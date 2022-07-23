import { dateStore } from "..";
import { Post, User, Like } from "../../types";

export class inMemoryDataStore implements dateStore{
    createComment(comment: Comment): void {
        throw new Error("Method not implemented.");
    }
    listComments(postId: string): Comment[] {
        throw new Error("Method not implemented.");
    }
    deleteComment(id: string): void {
        throw new Error("Method not implemented.");
    }
    createPost(post: Post): void {
        throw new Error("Method not implemented.");
    }
    listPosts(): Post[] {
        throw new Error("Method not implemented.");
    }
    getPost(postId: string): Post | undefined {
        throw new Error("Method not implemented.");
    }
    deletePost(postId: string): void {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): User {
        throw new Error("Method not implemented.");
    }
    getUserByUserName(username: string): User {
        throw new Error("Method not implemented.");
    }
    createLike(like: Like): void {
        throw new Error("Method not implemented.");
    }
    
}
    