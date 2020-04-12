import React from 'react';
import {Link} from 'react-router-dom';
import "./intro.css";

import sky from '../Assets/sky.svg';
import intro1 from '../Assets/intro-1.svg';
import intro2 from '../Assets/intro-2.svg';
import sky2 from '../Assets/sky_2.png';
import girl1 from '../Assets/girl.svg';
import girlsad from '../Assets/girl_sad.svg';
import meteor from '../Assets/meteor.svg';

function App() {

    const [offset, setOffset] = React.useState(0);
    const nextPage = () => {
        setOffset (offset+1);
    }
    const previousPage = () => {
        setOffset (offset-1);
    }

  return (
    <div className="wrapper">
        <main className="intro">
            <div style={{transform: `translateY(-${offset*100}vh)`, transition: "transform 1s"}}>
                <section>
                    <div className="bg-image">
                        <img src={sky} alt="" />
                    </div>
                    <div className="bg-extra">
                        <img src={intro1} alt="" />
                    </div>
                    <div class="text-wrapper">
                        <h1>Hello!</h1>
                        <p><span class="line-space">Welcome to Wander,</span> a place where we challenge and <span class="line-space">overcome our inner catastrophes.</span> </p>
                    </div>
                    <button className= "first-button" onClick={nextPage}><i className='fas fa-chevron-down'/></button>
                </section>
    
                <section>
                    <div className="bg-image">
                        <img src={sky2} alt="" />
                    </div>
                        <p className="pagination">1/3</p>
                    <div class="text-wrapper">
                        <h2>What is catastrophizing?</h2>
                        <p>It refers to when we believe a situation or event are far worse than they really are.</p>
                        <p>It is our brain’s natural response to imagine threats so we can protect ourselves.</p>
                    </div>
                    <div className="bg-image girl">
                        <img src={girl1} alt="" />
                    </div>
                    <button className="previous" onClick={previousPage}><i className='fas fa-chevron-up'/></button>
                    <button className="next" onClick={nextPage}><i className='fas fa-chevron-down'/></button>
                </section>
    
                <section>
                    <div className="bg-image">
                        <img src={sky2} alt="" />
                    </div>
                        <p className="pagination">2/3</p>
                    <div class="text-wrapper">
                        <h2>Why is it bad?</h2>
                        <p>Although the start of it may be natural, our worries may become unrealistic, without us even noticing. </p>
                        <p>Believing that everything will fail no matter what cuts ourselves off from reality. It disables us from opportunities and options.</p>
                    </div>
                    <div className="bg-image girl">
                        <img src={girlsad} alt="" />
                    </div>
                    <div className="bg-image meteor meteor2-small">
                        <img src={meteor} alt="" />
                    </div>
                    <div className="bg-image meteor meteor2-big">
                        <img src={meteor} alt="" />
                    </div>
                    <button className="previous" onClick={previousPage}><i className='fas fa-chevron-up'/></button>
                    <button className="next" onClick={nextPage}><i className='fas fa-chevron-down'/></button>
                </section>
    
                <section>
                    <div className="bg-image flipped">
                        <img src={sky2} alt="" />
                    </div>
                    <div className="bg-stars">
                        <img src={intro2} alt="" />
                    </div>
                        <p className="pagination">3/3</p>
                    <div class="text-wrapper">
                        <h2>So how can we stop catastrophizing?</h2>
                        <p>If you struggle with catastrophizing, Wander is here to help.</p>
                        <p>With Wander, you will: <span class="line-space"><span class="underline">Notice</span> your catastrophizing pattern,</span> <span class="line-space"><span class="underline">Challenge</span> the unrealistic thoughts, and</span> <span class="underline">Replace</span> them with more honest thoughts!</p>
                    </div>
    
                    <div className="bg-image meteor meteor3">
                        <img src={meteor} alt="" />
                    </div>
                    <button className="previous" onClick={previousPage}><i className='fas fa-chevron-up'/></button>
                    <Link to = "/ThoughtForm">Start!</Link>
    
    
                   
                </section>
            </div>

        </main>
    </div>
  );
}

export default App;
