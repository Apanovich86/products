import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {postApiService} from "../../services/postService";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        postApiService.getAllPosts().then(({data})=> setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;