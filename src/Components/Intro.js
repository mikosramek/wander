import React from 'react';
import {Link} from 'react-router-dom';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';

function App() {

  return (
    <div className="wrapper">
        <main>
            <h1>De-catastrophize your thoughts.</h1>
            <div className="icon">
                <img src={image1} alt="image1"/>
            </div>
            <h2>Catastrophizing refers to when we start imagining the worst case scenarios, when we're met with genuine setbacks.</h2>
            <div className="icon">
                <img src={image2} alt="image2"/>
            <h2>Our brain triggers us to think that if we believe that the worst case scenario will happen, we can somehow prevent it.</h2>
            </div>
            <div className="icon">
                <img src={image3} alt="image3"/>
            </div>
            <h2>Catastrophizing may end up making us anxious, and depressed. It blocks us away from options and opportunities.</h2>
            <div className="icon">
                <img src={image3} alt="image3"/>
            </div>
            <h2>It justifies us for not even trying, and attemps to excuse our failure before we even try.</h2>

            <Link to = "/ThoughtForm"><strong>Continue</strong></Link>
        </main>
    </div>
  );
}

export default App;
