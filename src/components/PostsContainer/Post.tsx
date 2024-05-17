import React, {FC, PropsWithChildren} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps extends PropsWithChildren {
    post: IPostModel;
}
const Post:FC<IProps> = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <br/>
        </div>
    );
};

export default Post;