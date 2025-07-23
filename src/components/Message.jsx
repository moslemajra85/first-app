import React from 'react'

const Message = ({ children }) => {

    //console.log(props);
    return (
        <div style={{ border: "1px solid black", padding: "10px " }}>{children}</div>
    )
}

export default Message