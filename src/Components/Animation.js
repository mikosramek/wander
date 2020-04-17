import React from 'react'

import stars from '../Assets/RF-1.svg';
import bubble from '../Assets/bubble.svg';
import meteor from '../Assets/meteor.svg';

import Starboy from './Starboy';

import ScrollButton from './ScrollButton';
import WigglyText from './WigglyText';

const Animation = (props) => {

    const [state1, setState1] = React.useState(0);
    const advance1 = () => {
        if (state1 > 2) return
        setState1(state1 + 1)
    };
    const [state2, setState2] = React.useState(0);
    const advance2 = () => {
        if (state2 > 2) return
        setState2(state2 + 1)
    };
    const [state3, setState3] = React.useState(0);
    const advance3 = () => {
        if (state3 > 2) return
        setState3(state3 + 1)
    };


    const animate = state1 === 2 && state2 === 2 && state3 === 2 ? 'animate' : '';

    const [paragraphIndex, setParagraphIndex] = React.useState(0);
    const paragraphs = [
        `I'll ${props.rfaction1} to try my best to get through this!`,
        `And if it does turn out to be ${props.result}, I'll help myself feel better by ${props.rfmitigation}.`,
        `I'll gain ${props.gain} from this experience.`
    ];

const progress = () => {
        setState1(0);
        setState2(0);
        setState3(0);
        setParagraphIndex(0);
        props.scroll();
      }

    return (
        <>
            <div className="bg-image">
                <img src={stars} alt="" />
            </div>
            <div className={`bg-image one ${animate}`} onClick={advance1}>
                {
                    state1 === 0
                        ? <div className="meteor">
                            <img src={meteor} alt="" />
                        </div>
                        

                        : <div>
                            <div className="stars">
                                <Starboy className="starone" />
                                <Starboy className="startwo" />
                            </div>
                            {
                                state1 === 1
                                    ? <div className="bubble">
                                        <img src={bubble} alt="" />
                                    </div>
                                    : null
                            }

                        </div>
                }
            </div>

            <div className={`bg-image two ${animate}`} onClick={advance2}>
                {
                    state2 === 0
                        ? <div className="meteor">
                            <img src={meteor} alt="" />
                        </div>
                        : <div>
                            <div className="stars">
                                <Starboy className="starthree" />
                                <Starboy className="starfour" />

                            </div>
                            {
                                state2 === 1
                                    ? <div className="bubbletwo">
                                        <img src={bubble} alt="" />
                                    </div>
                                    : null
                            }

                        </div>
                }
            </div>

            <div className={`bg-image three ${animate}`} onClick={advance3}>
                {
                    state3 === 0
                        ? <div className="meteor">
                            <img src={meteor} alt="" />
                        </div>
                        : <div>
                            <div className="stars">
                                <Starboy className="starfive" />

                            </div>
                            {
                                state3 === 1
                                    ? <div className="bubblethree">
                                        <img src={bubble} alt="" />
                                    </div>
                                    : null
                            }

                        </div>
                }
            </div>



            {
                state1 === 2 && state2 === 2 && state3 === 2 && paragraphIndex < paragraphs.length
                    ? <div
                        className="bubble-quote"
                        onClick={() => setParagraphIndex(paragraphIndex + 1)}>
                        <p>
                            "<WigglyText text={paragraphs[paragraphIndex]}/>"
                        </p>
                    </div>

                    : paragraphIndex >= paragraphs.length
                    ? <ScrollButton enabled text="See my thought record" scroll={progress} />
                    : null
            }


        </>
    )
}

export default Animation;