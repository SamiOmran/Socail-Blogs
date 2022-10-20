import * as service from './service.js'
import Post from '../../models/post.js'

export const getAllPosts = async (req, res) => {
    const posts = await Post.find()

    if (posts.length === 0) {
        return res.json({message: 'No posts found'})
    }
    return res.status(200).json({number: posts.length, data: posts})
}

export const createPost = async (req, res) => {
           console.log(req);
/*
    try {
        const {title, text} = req.body
        
        await service.createPost(newPost)

        return res.status(200).json({ message: 'Post added', data: newPost })
    } catch (err) {
        console.log(err);
        return res.status(201).json({ message: 'error creating post', data: err })
    }*/
}