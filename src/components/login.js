import React from "react";


export default class LogIn extends React.Component{
    render(){
      
      return(
     
            <div className="container-sm">
                <h3>Log In</h3>
                <label for="uname"><b>Username:</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required></input>

                <label for="psw"><b>Password:</b></label>
                <input type="text" placeholder="Enter Password" name="psw" required></input>

                <button type="submit">Login</button>
                
                
                
            </div>
            
      );

      
      
    }
}