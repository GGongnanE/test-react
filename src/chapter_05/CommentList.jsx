import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김종석재 팀장",
        comment: "오늘도 화이팅!"
    },
    {
        name: "퀸다미",
        comment: "리액트 왜함?"
    },
    {
        name: "김병견",
        comment: "Fighting! Mickey!!"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment 
                        name={comment.name}
                        comment={comment.comment}
                    />
                );
            })}
        </div>
    );
}

export default CommentList;