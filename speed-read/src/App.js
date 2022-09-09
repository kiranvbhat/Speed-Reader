import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import RenderedWord from './RenderedWord.js'
import Mercury from '@postlight/mercury-parser';
import $ from 'jquery'

function App() {
  const [text,setText] = useState("–");
  function getText(val) {
    setText(val.target.value)
  }

  const [wpm,setWpm] = useState("400");
  function getWpm(val) {
    setWpm(val.target.value);
  }

  const [fontSize,setFontSize] = useState("30");
  function getFontSize(val) {
    setFontSize(val.target.value);
  }
  
  const [numUpdate,setNumUpdate] = useState("");
  
  function onButtonPress() {
    // Mercury.parse(text).then(result => {
    //   setText(result.excerpt);
    //   setNumUpdate(Math.random().toString());
    // });
    // console.log("About to fetch");
    /*const html = (await (await fetch(text)).text());
    // const doc = new DOMParser().parseFromString(html, 'text/html');
    setText(html);
    setNumUpdate(Math.random().toString());*/
    // $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(text) + '&callback=?', function(data){

      // console.log("Fetch succeeded");
	    // setText(data.contents);
      setNumUpdate(Math.random().toString());
    // });
  }

  return (
    <div className="App">
        {/* <h1>Hi</h1> */}
        {/* <p1>{text}</h1> */}
        {/* <input type="text" onChange={getText} /> */}
        <RenderedWord key={numUpdate} text={text} wpm={wpm} fontSize={fontSize}/>
        <br/>

        <textarea style={ {width: 600, height: 400} } onChange={getText} placeholder="Enter text here..."/>
        <br/>

        <p>{wpm} wpm</p>
        <input type="range" min="60" max="1000" onChange={getWpm} value={wpm}/>
        <br/>

        <p>{fontSize} px</p>
        <input type="range" min="20" max="80" onChange={getFontSize} value={fontSize}/>
        <br/>

        <button onClick={onButtonPress}>Start</button>
        {/* <h1>After</h1> */}
    </div>
  );
}

export default App;
