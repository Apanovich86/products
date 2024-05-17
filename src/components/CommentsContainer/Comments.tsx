import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import {commentApiService} from "../../services/commentService";
import Comment from "./Comment";
import comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        commentApiService.getAllComments().then(({data})=> setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;