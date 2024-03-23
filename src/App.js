import TextForm from './components/TextForm'
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
import React from 'react'
//import About from './components/About';
//import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
function App() {
   const [mode,setmode]=useState('light');
   const [alert,setalert] = useState(null);
   const showalert=(msg,type)=>{
    setalert({
      msg : msg,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
   }
   const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
   }
  return (
   <React.Fragment> 
   {/*<Router>*/}
   <Navbar  mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
  
    
    
    {/*<Switch>
      
       <Route exact path="/about">
        <About/>
       </Route>
 
       <Route exact path="/">
        */}
       <div className="container my-3">
       <TextForm showalert={showalert} mode={mode} heading="Enter the text to analyze"/>
       </div>
      {/* </Route>
      
    </Switch>
    
      </Router>*/}
    
  
   
   
   </React.Fragment>
  );
}

export default App;
