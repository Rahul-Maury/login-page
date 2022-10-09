import React from "react";
import { useState } from "react";

function App() {
   
     const [name,statefun]=useState({fname:"",lname:""});
     
  function eventhand(event){
   
        statefun((pre)=>{

       if(event.target.name==="fname"){
        return {
          
          fname:event.target.value,
          lname:pre.lname
          
        };
       }
      else if(event.target.name==="lname"){
        return {
         
          fname:pre.fname,
          lname:event.target.value
        };
       }
      
     })
    
  }
  
 function eventclick(){

 }

  return (
    <div className="container">
    <form className="form">
      <h1>Hello {name.fname} {name.lname} </h1>
  <input onChange={eventhand} name="fname" type="text" placeholder="first" />
  <input onChange={eventhand} name="lname" type="text" placeholder="lastname" />
  
 
  <button onClick={eventclick}>submit</button>
</form>
</div>
  )
  
 
    

}

export default App;
