// Learning about states,props and useState
import React,{useState} from 'react';
export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.handleAlert("Converted to UpperCase","success")
  }
  const handleLowClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.handleAlert("Converted to LowerCase","success")
  }
  const handleClearClick = ()=>{
    let newtext = '';
    setText(newtext);
    props.handleAlert("Text-Area is cleared","success")
  }
  const handleCapitalClick = ()=>{
    let newtext ="";
    for (let i = 0; i < text.split(" ").length; i++) {
      const element = text.split(" ")[i];
      newtext += element.charAt(0).toUpperCase() + element.substring(1);
      if( i+1 < text.split(" ").length){
        newtext+=" ";
      }
    }
    setText(newtext);
    props.handleAlert("First letter of each word is capitalized","success")
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.handleAlert("Copied to Clipboard","success")
  }
  const handleExtraSpaces = ()=>{
    let newtext = text.split(/\s+/)
    setText(newtext.join(" "));
    props.handleAlert("Extra spaces are removed","success")
  }
  const handleOnChange = (event)=>{
    // Changes the initial text to the text given by the user in the form
    setText(event.target.value);
  }
  const[text, setText] = useState("");
  // setText("new text"); // Correct Way to change state
  return (
    <div>
      <div className="mb-3 container">
        <h2 className='my-3 mx-2'>{props.title}</h2>
        <textarea className="form-control mx-2 my-3" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode === 'light' ? 'White':'rgb(32 47 78)',color:props.mode === 'light' ? 'Black':'White'}} ></textarea>
        <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" id='btn-1' onClick={handleUpClick}>UpperCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" id='btn-2'onClick={handleLowClick}>LowerCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" id='btn-3'onClick={handleCapitalClick}>Capitalize</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" id='btn-4'onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" id='btn-5' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" id='btn-6'onClick={handleClearClick}>ClearText</button>
        <div className='mx-2'>
          <h3 className='my-3'>Text Summary</h3>
          <p>{text.split(/\s+/).filter((element)=>{return(element.length!==0)}).length} words and {text.length} characters.</p>
          <p>{text.split(/\s+/).filter((element)=>{return(element.length!==0)}).length*0.008} minutes are required to completely read the above text</p>
        </div>
      </div>
    </div>
  )
}

