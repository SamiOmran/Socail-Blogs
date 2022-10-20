import Post from '../../models/post.js'

export const createPost = async (newPost) => {
    await Post.create(newPost);
}