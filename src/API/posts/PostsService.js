import { api } from "..";

class PostsService {
  constructor() {}

  /**
   * @param {number} page
   * @param {number} limit
   * @returns
   */
  getPosts() {
    return api.get("/posts");
  }
  deletePost(id) {
    return api.delete(`/posts/${id}`)
  }
}

export const postsService = new PostsService();
