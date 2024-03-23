import { useState } from "react"


export default function TextForm(props) {
    const fun1=()=>{
        let x = Text.toUpperCase();
        setText(x);
    }
    const fun3=()=>{
      let g = Text.toLowerCase();
      setText(g);
  }
    const fun2=(event)=>{
        console.log("Onchange");
        setText(event.target.value);

    }
    const clear=()=>{
     setText("");
    }
    const handlep=()=>{
        
         var x = document.getElementById("exampleFormControlTextarea1");
         x.select();
         navigator.clipboard.writeText(x.value);
    }
    const yy=()=>{
      let y=Text.split(/[ ]+/);
      setText(y.join(" "))
    }
  const [Text,setText]=useState("Enter Your Text");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
         <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} value={Text} onChange={fun2} rows="8"  ></textarea>
        </div>

        <button className='btn btn-primary mx-1' onClick={fun1}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={fun3}>Convert to lowercase</button> 
        <button className='btn btn-primary mx-1' onClick={clear}>Clear All</button>   
        <button className='btn btn-primary mx-1' onClick={handlep}>Copy</button> 
        <button className='btn btn-primary mx-1' onClick={yy}>Remove extra space</button> 
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p> {Text.split(" ").length} words and {Text.length} characters</p>
      <p> {0.008 * (Text.split(" ").length)} Minutes to read </p>
      <h2>Preview</h2>
      {Text}
    </div>
    </>
  )
}
