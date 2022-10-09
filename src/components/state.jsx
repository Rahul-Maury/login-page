import React from "react";
 
function State(){
    let now=new Date().toLocaleTimeString();
    
const [count,state]=React.useState(now);


function increase(){
   let time=new Date().toLocaleTimeString();
  state(time)
}


return (
  <div>
  
  <h2>{count}</h2>
   <button onClick={increase}>Get Time</button>
</div>
)

    

}


export default State;