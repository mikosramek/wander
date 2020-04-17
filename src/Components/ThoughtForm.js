import React from 'react';
import ScrollButton from './ScrollButton';
import './ThoughtForm.css';
import Animation from './Animation';
import Starboy from './Starboy';

import sky from '../Assets/sky.svg';
import stars from '../Assets/TF-1.svg';
import tfbg from '../Assets/TF-2.svg';
import meteor from '../Assets/meteor.svg';
import blob from '../Assets/blob.svg';
import blob2 from '../Assets/blob_2.svg';
import sadface from '../Assets/sadface.svg';
import sticky from '../Assets/sticky.svg';
import ticketbg from '../Assets/ticketbg.svg';



function ThoughtForm() {

  const [offset, setOffset] = React.useState(0);
  const nextPage = () => {
    setOffset(offset + 1);
  }
  const previousPage = () => {
    setOffset(offset - 1);
  }

  const [event, setEvent] = React.useState('');
  const [action1, setAction1] = React.useState('');
  const [action2, setAction2] = React.useState('');
  const [result, setResult] = React.useState('');
  const [actionThoughts, setactionThoughts] = React.useState('');
  const [resultThoughts, setresultThoughts] = React.useState('');
  const [effectTime, setEffectTime] = React.useState(0);
  const [effectTimeUnit, setEffectTimeUnit] = React.useState('Hours');

  const resultText = result ? <span className="result"> {result} </span> : <span className="eventPlaceholder">result</span>
  const action1Text = action1 ? <span className="action"> {action1} </span> : <span className="eventPlaceholder">firstAction</span>
  const action2Text = action2 ? <span className="action"> {action2} </span> : <span className="eventPlaceholder">secondAction</span>
  const eventText = event ? <span className="event"> {event} </span> : <span className="eventPlaceholder">an upcoming event</span>

  const [rfaction1, setRFaction1] = React.useState('');
  const [rfmitigation, setRFmitigation] = React.useState('');
  const [gain, setGain] = React.useState('');

  const goBackToMain = () => {
    setEvent('');
    setAction1('');
    setAction2('');
    setResult('');
    setactionThoughts('');
    setresultThoughts('');
    setRFaction1('');
    setRFmitigation('');
    setGain('');
    setEffectTime(0);
    setEffectTimeUnit('Hours');
    setOffset(0);
  }


  return (
    <div className="wrapper">
      <main className="thought">
        <div style={{ transform: `translateY(-${offset * 100}vh)`, transition: "transform 1s" }}>
          <section className="page">
            <p className="solo-title">Let's think for a bit.<span className="line-space">What are you worried about</span> the most right now?</p>
            <ScrollButton enabled text="Next" scroll={nextPage} />
          </section>

          <section className="page">
            <div className="bg-image">
              <img src={sky} alt="" />
            </div>
            <div className="bg-stars">
              <img src={stars} alt="" />
            </div>

            <p className="title"><span className="line-space">What are you worried about</span> the most right now?</p>

            <form className="thoughtForm">
              <label htmlFor="event">I'm worried about</label>

              <div className="flexLine">
                <input className="event"
                  type="text"
                  id="event"
                  value={event}
                  onChange={(e) => {
                    setEvent(e.target.value)
                  }
                  }
                  placeholder="an upcoming event"
                />
                <p>,</p>
              </div>

              <label htmlFor="action1">Because I'm scared I will</label>
              <div className="actions">
                <input className="action"
                  type="text" id="action1"
                  value={action1}
                  onChange={(e) => {
                    setAction1(e.target.value)
                  }
                  } />

                <label htmlFor="action2">and</label>
                <input className="action"
                  type="text"
                  id="action2"
                  value={action2}
                  onChange={
                    (e) => { setAction2(e.target.value) }
                  } />
                <p>,</p>
              </div>

              <p>resulting {eventText}</p>

              <div className="flexLine">
                <label htmlFor="result">to be</label>
                <input className="result"
                  type="text"
                  id="result"
                  value={result}
                  onChange={
                    (e) => { setResult(e.target.value) }
                  } />
                <p>.</p>
              </div>
              <ScrollButton enabled={event && action1 && action2 && result} text="Next" scroll={nextPage} />
              <ScrollButton enabled text="Go back" scroll={previousPage} className="back" />


            </form>

          </section>


          <section className="thoughts page">
            <div className="bg-stars">
              <img src={stars} alt="" />
            </div>

            <div className="bg-image meteor worrysummary">
              <img src={meteor} alt="" />
            </div>

            <p className="summary">
              {`"I'm worried about ${event}, because I'm scared I will ${action1} and ${action2}, resulting in ${event} to be ${result}."`}
            </p>
            <ScrollButton enabled text="Next" scroll={nextPage} />
            <ScrollButton enabled text="Go back" scroll={previousPage} className="back" />
          </section>

          <section className="thoughts page">
            <div className="bg-image bottom">
              <img src={tfbg} alt="" />
            </div>
            <form className="thoughtForm">
              <p className="action-text">{action1Text}</p>
              <p className="action-text">{action2Text}</p>
              <p className="prompt">Do these happen often in this situational context?</p>
              <textarea
                name=""
                value={actionThoughts}
                onChange={(e) => setactionThoughts(e.target.value)}
                id=""
                cols="30"
                rows="10"
                placeholder="Write your thoughts.."></textarea>
              <ScrollButton enabled={actionThoughts} text="Next" scroll={nextPage} />
              <ScrollButton enabled text="Go back" scroll={previousPage} className="back" />
            </form>
          </section>

          <section className="thoughts page">
            <div className="bg-image bottom">
              <img src={tfbg} alt="" />
            </div>
            <form className="thoughtForm">
              <p className="action-text">{resultText}</p>
              <p className="prompt">Define "{resultText}". What does it mean for {event}?</p>
              <textarea
                name=""
                value={resultThoughts}
                onChange={(e) => setresultThoughts(e.target.value)}
                id=""
                cols="30"
                rows="10"
                placeholder="Write your thoughts.."></textarea>
              <ScrollButton enabled={resultThoughts} text="Next" scroll={nextPage} />
              <ScrollButton enabled text="Go back" scroll={previousPage} className="back" />
            </form>
          </section>

          <section className="thoughts page">
            <div className="bg-image bottom">
              <img src={tfbg} alt="" />
            </div>
            <form className="thoughtForm">
              <p className="action-text">{eventText}</p>
              <p className="prompt">If you can, think back to the times you experienced this. <span className="line-space">On average, how long were you affected by them for?</span></p>

              <div className="lineFlex timeSelect">
                <label htmlFor="time" className="visually-hidden">Time Frame</label>

                <input type="number" value={effectTime} onChange={(e) => setEffectTime(e.target.value)} id="time" min={0} max={100} />

                <label htmlFor="counter" className="visually-hidden">Time Counter</label>

                <select name="counter" id="counter">
                  <option value="Hours" defaultValue={effectTimeUnit === "Hours"} onChange={(e) => { setEffectTimeUnit(e.target.value) }}>Hours</option>
                  <option value="Days" defaultValue={effectTimeUnit === "Days"} onChange={(e) => { setEffectTimeUnit(e.target.value) }}>Days</option>
                  <option value="Weeks" defaultValue={effectTimeUnit === "Weeks"} onChange={(e) => { setEffectTimeUnit(e.target.value) }}>Weeks</option>
                  <option value="Months" defaultValue={effectTimeUnit === "Months"} onChange={(e) => { setEffectTimeUnit(e.target.value) }}>Months</option>
                  <option value="Years" defaultValue={effectTimeUnit === "Years"} onChange={(e) => { setEffectTimeUnit(e.target.value) }}>Years</option>
                </select>
              </div>
              <ScrollButton enabled={resultThoughts} text="Next" scroll={nextPage} />
              <ScrollButton enabled text="Go back" scroll={previousPage} className="back" />
            </form>
          </section>

          <section className="thoughts page">
            <p className="solo-title">Now, let’s think about something more honest and manageable.</p>
            <ScrollButton enabled text="Next" scroll={nextPage} />
          </section>





          <section className="RFpage">
            <div className="bg-image">
              <img src={blob} alt="" />
            </div>
            <div className="bg-image bottom">
              <img src={blob2} alt="" />
            </div>

            <p className="RFtitle"><span className="line-space">What would be the more</span> likely to happen?</p>

            <form className="RFthoughtForm">
              <label htmlFor="rfaction1">Worrying about {`${event}`} makes me feel uncomfortable. But to try my best to get through it, I will</label>
              <div className="rfactions">
                <input className="rfaction"
                  type="text" id="arfction1"
                  value={rfaction1}
                  onChange={(e) => {
                    setRFaction1(e.target.value)
                  }
                  } 
                  placeholder="an action you'll take"
                  />
                <p></p>
              </div>
              <label htmlFor="gain">And it's okay even if it ends up being {`${result}`}, because I'll gain</label>
              <input className="gain"
                type="text" id="gain"
                value={gain}
                onChange={(e) => {
                  setGain(e.target.value)
                }
                } 
                placeholder="something you can take away"
                />
              <p>from the experience.</p>

              <label htmlFor="rfmitigation">I'll help myself feel better by</label>
              <input className="rfmitigation"
                type="text"
                id="rfmitigation"
                value={rfmitigation}
                onChange={
                  (e) => { setRFmitigation(e.target.value) }
                } 
                placeholder="an action that comforts you"
                />

              <ScrollButton className="RFbutton" enabled={rfaction1 && gain && rfmitigation} text="Next" scroll={nextPage} />

            </form>
          </section>

          <section className="thoughts page animation">
            <Animation
              scroll={nextPage}
              rfaction1={rfaction1}
              rfmitigation={rfmitigation}
              gain={gain}
              result={result}
            />
          </section>


          <section className="thoughts page receipt">
            <div className="ticket">
              <div className="flex dates">
                <p>{new Date().toLocaleString('default', { month: 'long' })} {new Date().getDate()}</p>
                <p>{new Date().getHours() % 12}:{new Date().getMinutes()}</p>
              </div>
              <h2>{event}</h2>
              <h3>Summary</h3>
              <div className="flex ticket__summary">
                <img src={sadface} alt="" />
                <p>{`"I'm worried about ${event}, because I'm scared I will ${action1} and ${action2}, resulting in ${event} to be ${result}."`}</p>
              </div>
              <div className="dotted-line"></div>
              <div className="flex stickynote">
                <div className="stars">
                  <Starboy className="red" />
                  <Starboy className="yellow" />
                  <Starboy className="blue" />
                  <Starboy className="green" />
                  <Starboy className="yellow" />
                </div>
                <div className="quotes">
                  <p>I'll {rfaction1} to try my best to get through this!</p>
                  <p>And if it does turn out to be {result}, I'll help myself feel better by {rfmitigation}.</p>
                  <p>I'll gain {gain} from this experience.</p>
                </div>
              </div>
              <img src={sticky} className="sticky" alt="" />
            </div>
            <ScrollButton enabled text="Next" scroll={nextPage} />
          </section>

          <section className="thoughts page receipt">
            <div className="ticket">
              <p>This event usually affects me for {effectTime} {effectTimeUnit}.</p>
              <div className="dotted-line"></div>
              <p className="accent"><span>{action1}</span>{action2}</p>
              <p>{actionThoughts}</p>
              <p className="accent">{result}</p>
              <p>{resultThoughts}</p>
              <img src={sticky} className="sticky" alt="" />
            </div>
            <button onClick={goBackToMain}>Restart</button>
          </section>

        </div>
      </main>
    </div>
  );
}

export default ThoughtForm;
