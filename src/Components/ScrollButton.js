import React from 'react'


const scrollButton = (props) => {
    const scrollEvent = (e) => {
        e.preventDefault();
        props.scroll();
    }
    return(
        <button onClick = {scrollEvent} disabled = {!props.enabled} className={props.className}>
            {props.text}
        </button>
    )
}

export default scrollButton;