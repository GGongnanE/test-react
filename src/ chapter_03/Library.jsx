import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <h1>Welcome to the Library!</h1>
            <Book name="The Great Gatsby" numOfPage={218} />
        </div>
    );
}

export default Library;