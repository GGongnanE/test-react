import React from "react";
import Comment from "./Comment";

function CommentList() {
    return (
        <div>
            <Comment 
                name={"김종석재 팀장"}
                comment={"오늘도 화이팅!"}
            />
            <Comment 
                name={"퀸다미"}
                comment={"리액트 왜함?"}
            />
        </div>
    );
}

export default CommentList;