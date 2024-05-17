import React, {FC, PropsWithChildren} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface IProps extends PropsWithChildren {
    comment: ICommentModel;
}
const Comment:FC<IProps> = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <br/>
        </div>
    );
};

export default Comment;