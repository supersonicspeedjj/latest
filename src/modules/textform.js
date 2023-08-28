import React, { useState } from "react";
// import Speech from 'react-speech';
export default function TextForm(props) {
  const [text, setText] = useState("enter here");
  const [wordle, setwordle] = useState("");
  const [viscount, setviscount] = useState("");
  const [viscos, setviscos] = useState("");
  let counter = text.split(" ");
  
  const uppercrusty = () => {
    setText(text.toUpperCase());
    props.setter("Text converted to uppercase","Successfull");
  };
  const changer = (event) => {
    setText(event.target.value);
    
    
    counter = text.split(" ");
 
   
  };
  const lowercrusty = () => {
    setText(text.toLowerCase());
    props.setter("Text converted to lowercase","Successfull");
  };
  const clear = () => {
    setText("");
    props.setter("Text cleared","Successfull");
  };
  var max = 1;

  const frequent = () => {
    counter.sort();
    setwordle("");
    for (let i = 0; i < counter.length - 1; i++) {
      let curr = 1;
   
      while (counter[i] === counter[i + 1] && i < counter.length) {
        curr++;
        i++;
      }
      if (curr > max) {
        max = curr;
        setwordle(counter[i]);
      }
    }
    props.setter("Most Frequent apperaing word found!","Successfull");
   
    
    
  };
  const sorter = () => {
    counter.sort();
    //setText("");
    let s = "";
    for (let i = 0; i < counter.length; i++) {
      s += counter[i] + " ";
    }
    clear();
    setText(s);
    props.setter("Text sorted","Successfull");
  };
  // const speak = () => {
  //   return (
  //     <Speech
  //       text={text}
  //       pitch="1"
  //       rate="1"
  //       volume="1"
  //       lang="en-GB"
  //       voice="Google UK English Male"
  //     />
  //   );
    
  // };
  let consonent = 0;
  let vowels = 0;
  // let token = Number;
  const counter1 = (token) => {
    for (let i = 0; i < counter.length; i++) {
      //let j = 0;

      for (let j = 0; j < counter[i].length; j++) {
        if (
          counter[i].charAt(j) === "a" ||
          counter[i].charAt(j) === "e" ||
          counter[i].charAt(j) === "i" ||
          counter[i].charAt(j) === "o" ||
          counter[i].charAt(j) === "u" ||
          counter[i].charAt(j) === "A" ||
          counter[i].charAt(j) === "E" ||
          counter[i].charAt(j) === "I" ||
          counter[i].charAt(j) === "O" ||
          counter[i].charAt(j) === "U"
        ) {
          vowels++;
        } else {
          consonent++;
        }
      }
    }
    if (token === 1) {
      setviscount(vowels);
      props.setter("Number of vowels found","Successfull");
    } else {
      setviscos(consonent);
      props.setter("Number of consonants found","Successfull");
    }
  };
  
  const extraspace = () => {
    
    let str = text.replace(/[\s\r\n]+/g, ' ');
     
      
      setText(str);
      
      props.setter("Extra spaces removed","Successfull");
    
  };
  const tarea={
    
    borderColor: props.mode==='light'?'#343a40':'black',
    backgroundColor: props.mode==='light'?'black':'white',
    border:"solid 5px",
    color: props.mode==='light'?'white':'black'
  }
  
  return (
    <>
      <div>
        <h1  style={{color: props.mode==='light'?'black':'white'}}> {props.heading}</h1>

        <textarea
          className="form-control"
          style={tarea}
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={changer}
        ></textarea>
        <button
        disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2 '}
          onClick={uppercrusty}
        >
          To Upper case
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2  my-3'}
          onClick={lowercrusty}
        >
          To lower case
        </button>
        <button
         disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2  my-3'}
          onClick={clear}
        >
          Clear
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2 my-3' }
          onClick={frequent}
        >
          most frequently used word
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2 my-3'}
          onClick={sorter}
        >
          arrange in sorted order
        </button>
        {/* <button
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2 my-3'}
          onClick={speak}
        >
          Read
        </button> */}
        <button
        disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2 my-3'}
          onClick={() => counter1(1)}
        >
          vowels
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2 my-3'}
          onClick={() => counter1(2)}
        >
          consonant
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className={props.mode==='light'?'btn btn-dark mx-2 my-3':'btn btn-light mx-2 my-3'}
          onClick={extraspace}
        >
          remove extra space
        </button>
      </div>
      <div className="container my-5" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>number of characters: {text.length} and words: {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}</h2>
        {/* <textarea
        style={{color: props.mode==='light'?'white':'black',
        backgroundColor: props.mode==='light'?'black':'white',border:"solid 3px",borderColor:props.mode==='light'?'gray':'black'}}
          className="form-control my-3"
          value={
            "count of chars : " +
            (text.length) +
            ",count of words : " +
            text.split(" ").length
          }
          id="floatingTextarea"
        ></textarea> */}
        <div className="my-3">
          <h1>maximum occuring word is: {wordle}</h1>
        </div>
        <div className="my-3">
          <h1>vowel count is : {viscount}</h1>
        </div>
        <div className="my-3">
          <h1>consonant count is :{viscos}</h1>
        </div>
      </div>
     
    </>
  );
}
