export interface Post{
    createPost(post:Post):void
    listPosts():Post[]
    getPost(postId:string):Post|undefined
    deletePost(postId:string):void
}