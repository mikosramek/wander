import React from 'react';

const WigglyText = (props) => {
    const words = props.text.split('');
    return(
        <>
            {
                words.map((letter, i) => {
                    return (
                        <span
                            className={`wiggly ${letter === ' ' ? 'space' : '' }`}
                            style={{animationDelay:`${Math.random()}s`}}
                            key={i}
                        >{letter}</span>
                    )
                })
            }
        </>
    )
}

export default WigglyText;