import React from 'react';
import ScrollButton from './ScrollButton';
import {Link} from 'react-router-dom';
import scrollButton from './ScrollButton';


function ThoughtForm() {

const [event, setEvent] = React.useState('');
const [action1, setAction1] = React.useState('');
const [action2, setAction2] = React.useState('');
const [result, setResult] = React.useState('');
const [actionThoughts, setactionThoughts] = React.useState('');
const [resultThoughts, setresultThoughts] = React.useState('');

const resultText = result ? <span className="result"> {result} </span> :<span className="eventPlaceholder">result</span>
const action1Text = action1 ? <span className="action"> {action1} </span> :<span className="eventPlaceholder">firstAction</span>
const action2Text = action2 ? <span className="action"> {action2} </span> :<span className="eventPlaceholder">secondAction</span>
const eventText = event ? <span className="event"> {event} </span> :<span className="eventPlaceholder">an upcoming event</span>


  return (
    <div className="wrapper">
      <main>
        <section className="page"> 
          <p className="title"> Think,</p>
          <p className="title"> What are you worried about the most right now?</p>
          <ScrollButton enabled/>
        </section>
        <section className="page">
          <p className="title">What are you worried about the most right now?</p>
  
          <form className="thoughtForm">
            <label htmlFor="event">I'm worried about</label>
  
            <div className="flexLine">
              <input className="event"
                type="text" 
                id="event" 
                value={event} 
                onChange={ (e) => { 
                    setEvent(e.target.value) 
                  }
                }
                placeholder="an upcoming event"
              />
              <p>,</p>
            </div>
  
            <label htmlFor="action1">Because I'm scared I will</label>
            <div className="actions">
              <input className= "action"
                type="text" id="action1" 
                value={action1} 
                onChange={(e) => { 
                    setAction1(e.target.value) }
              }/>
              
              <label htmlFor="action2">and</label>
              <input className="action"
              type="text" 
              id="action2" 
              value={action2} 
              onChange={
                (e) => { setAction2(e.target.value) }
              }/>
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
              }/>
              <p>.</p>
            </div>
            <ScrollButton enabled={event && action1 && action2 && result}/>
            
  
          </form>


        </section>

        <section className="thoughts page">
          <form>
            <p>{action1Text}</p>
            <p>{action2Text}</p>
            <p2>Do these happen often in this situation?</p2>
            <textarea 
            name="" 
            value = {actionThoughts} 
            onChange = {(e) => setactionThoughts(e.target.value)}
            id="" 
            cols="30" 
            rows="10"
            placeholder = "Write your thoughts.."></textarea>
            <ScrollButton enabled={actionThoughts}/>
          </form>
        </section>

        <section className="thoughts page">
          <form>
            <p>{resultText}</p>
            <p2>Define "{resultText}". What does it mean in this situation?</p2>
            <textarea 
            name="" 
            value = {resultThoughts} 
            onChange = {(e) => setresultThoughts(e.target.value)}
            id="" 
            cols="30" 
            rows="10"
            placeholder = "Write your thoughts.."></textarea>
            <ScrollButton enabled={resultThoughts}/>
          </form>
        </section>

        <section className="thoughts page">
          <form action="">
            <p>{eventText}</p>
            <p2>If you can, think back to the times you experienced this.</p2>
            <p2>On average, how long were you affected by them for?</p2>

            <div className="lineFlex timeSelect">
              <label htmlFor="time" className="visually-hidden">Time Frame</label>
  
              <input type="number" defaultValue={0} id="time" min={0} max={100}/>
  
              <label htmlFor="counter" className="visually-hidden">Time Counter</label>
  
              <select name="counter" id="counter">
                <option value="Hours">Hours</option>
                <option value="Days">Days</option>
                <option value="Weeks">Weeks</option>
                <option value="Months">Months</option>
                <option value="Years">Years</option>
              </select>
              <ScrollButton enabled={resultThoughts}/>
            </div>
          </form>
        </section>

        <section className="thoughts page">
            <p className="title">Let's de-catastrophize.</p>
            <Link to = "/Results">Continue</Link>
        </section>


      </main>

    </div>
  );
}

export default ThoughtForm;
