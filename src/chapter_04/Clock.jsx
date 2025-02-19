import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>Hello React!!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;