import React, {useState} from "react";
export default function TextForm(props) {
    const [text, setText] = useState('');

const handleUpClick = ()=>{
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success");
}
const handleLoClick = ()=>{
    console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!","success");
}
const handleClearClick = ()=>{
    console.log("uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!","success");
}
const handleCopy = ()=>{
   var text = document.getElementById("MyBox")
   text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied to clipboard!","success");
}
const handlExtraSpaces = ()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra spaces removed!","success");
}
const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
}

    return (
        <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743'}}
          id="MyBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handlExtraSpaces} >Remove Extra Space</button>
    </div>
    <div className="container my-4" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>
            Your Text Summary
        </h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to Read </p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
