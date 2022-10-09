import React from "react";
 function Form(props){

return (
    <div className="container">
    <form className="form">
  <input type="text" placeholder="Username" />
  <input type="password" placeholder="Password" />
  {props.register===true&&  <input type="password" placeholder=" Confirm Password" />}
 
  <button type="submit">{props.register===true?"login":"Register"}</button>
</form>
</div>
)


 }
 export default Form;