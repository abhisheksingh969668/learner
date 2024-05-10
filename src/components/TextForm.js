import React, {useState} from 'react'
//usrState is a type of hook

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
       // console.log("Upper Case was clicked"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClrClick = ()=>{
      let newText = '';
      setText(newText)
  }
  const handleSpaClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

  return (
    <>
    <div className="container " style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control " id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
    color:props.mode==='dark'?'white':'#042743'}} rows="8" ></textarea>
    </div>
    <button className="btn btn-primary  mx-1 my-1" onClick={handleUpClick} > UpperCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>LowerCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear </button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleSpaClick}>Remove Extra Spaces</button>
    </div>
    
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>  {/* here {{}} inner curly brackets represent object and outer represent js */}
      <h2>Text Summary</h2>
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words & {text.replace(/\s+/g, '').length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
