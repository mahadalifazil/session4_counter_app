import React from 'react';

export function Message (props){
    return(
        <div>
        <p>counter value is : {props.counterValue} </p>
        <p>created by : <b><i>{props.createrName}</i></b> </p>
        </div>
        );
}

export default Message;