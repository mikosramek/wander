import React from 'react'


const scrollButton = (props) => {
    const scroll = (e) => {
        e.preventDefault();
        const pageHeight = window.innerHeight;
        window.scrollBy(0, pageHeight);
    }
    return(
        <button onClick = {scroll} disabled = {!props.enabled}>
            Next
        </button>
    )
}

export default scrollButton;