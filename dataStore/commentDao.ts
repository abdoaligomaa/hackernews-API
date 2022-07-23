export interface Comment{
  createComment(comment: Comment): void
  listComments(postId: string): Comment[]
  deleteComment(id: string): void
}