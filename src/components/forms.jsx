import React,{useState} from "react";
function Forms() {
 
  
  
 
    const [name,statefun]=useState("");
    const [headingText, sethead]=useState("");
    
    function Eventhandler(event){
      statefun(event.target.value);
      console.log(event.target.value);
    }
    function EventClick(event){
      sethead(name);
    event.preventDefault();
      
    }



  return   <div className="container">
      <h1>Hello {headingText} </h1>
  <form className="form" onSubmit={EventClick}>
<input onChange={Eventhandler} type="text" placeholder="Enter the value" value={name} />



<button onClick={EventClick}>Submit</button>
</form>
</div>

}

export default Forms;
