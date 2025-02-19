import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`this book's name is ${props.name}!!`}</h1>
            <h2>{`This book is ${props.numOfPage} pages.`}</h2>
        </div>
    )
}

export default Book;