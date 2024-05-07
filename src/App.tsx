import React, {useState} from 'react';
import './App.css';
import {getPostsByUserId} from "./services/users.api.service";
import {IPostModel} from "./models/IPostModel";
import UsersComponent from "./components/users/Users";
import PostsComponent from "./components/posts/PostsComponent";
import Users from "./components/users/Users";

const App = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    const lift = (userId: number) => {
        getPostsByUserId(userId).then(({data: {posts}}) => {
            setPosts(posts);
        })
    }
    return (
        <div>
            <Users lift={lift}/>

            <PostsComponent posts={posts}/>
        </div>
    );
};

export default App;

