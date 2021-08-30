import React from "react";
import Card from './card'
import { useState } from "react";
import { usePasswordValidation } from "../hooks/usePasswordValidation";
import UserContext from './userContext';



function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
      if (!name) {
          alert("Please enter Your full Name.");
          return false;
      }
      if (!email) { 
          alert("Please enter Your Email.");
          return false;
      }

      if (!validLength || !hasNumber || !upperCase ||
          !lowerCase || !specialChar) {
        alert('Please check password requirements');
        return false;
        
      }
          return true;
    }
  
    function handleCreate(){
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      let password1= password.firstPassword;
      ctx.users.push({name,email,password1});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
    const [password, setPassword] = useState({
      firstPassword: "",
      
    });
    const [
      validLength,
      hasNumber,
      upperCase,
      lowerCase,
      specialChar,
    ] = usePasswordValidation({
      firstPassword: password.firstPassword,
      requiredLength: 10
    });
    const setFirst = (event) => {
      setPassword({ ...password, firstPassword: event.target.value });
    };
    
    return (
      <Card        
        bgcolor="warning"
        header="Create Account page"

        body={show ? (  
           <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter " value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password:
        <input onChange={setFirst} className="form-control" type='password'  />
      <div className='App'>
      <div>
      </div>
      
      <div>
        {!validLength ? (
            <p>Must have 10 characters!</p>) : (<></>)}

        {!hasNumber ? (
          <p>Must contain a Number!</p>) : (<></>)}
      
        {!upperCase ? (
          <p>Must contain an Upper Case Letter!</p>) : (<></>)}  

        {!lowerCase ? (
          <p>Must Contain a Lower Case Letter!</p>) : (<></>)}  

        {!specialChar ? (
          <p>Must Contain a Special Character!</p>) : (<></>)}    

      </div>
    </div><br/>
    <button type="submit" className="btn btn-light" disabled={!password.firstPassword} onClick={handleCreate}>Create Account</button>
               
          </>
                ):(
                  
                <>
              <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                
                </>
              )}
      />
    )
  }
  export default CreateAccount;