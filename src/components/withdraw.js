import React from "react";
import Card from './card'


function Withdraw(){
    const [show, setShow]     = React.useState(true);
    const [amount, setAmount]         = React.useState('');
    const [status, setStatus]         = React.useState('');
    const [balance, setBalance]         = React.useState(100000);
        
  
    
    function validate(field, label){
        if (!field) {
        setStatus('Error: ' + label);
        return false;
        }
        if (amount <= 0) {
            alert("Please enter an amount greater than 0");
            return false;
        }
        if (amount > balance) {
            alert("Please enter an amount less than Total Balance!");
            return false;
        }
        if (isNaN(amount)) { 
            alert("Please enter a number");
            return false;
        }
        return true;
    }

    function handleCreate(){
    if (!validate(amount,     'amount'))     return;
    setBalance(parseInt (balance) - parseInt (amount));
    setShow(false);
    }    

    function clearForm(){
    setAmount('');
    setShow(true);
    }
return (
    <Card 
        bgcolor="danger"
        header="Withdraw page"
        status={status}
        title="Please do not Withdraw any Money!!"
        
        body={show ? (  
                <>
                {"Balance:  $"+balance}<br/>
                Withdraw Amount<br/>
                <input type=" " className="form-control" id="Amount"  placeholder="USD " value={amount} onChange={e => {
                    setAmount(e.currentTarget.value)
                }
                } /><br/>
                <br/>
    <button type="submit" className="btn btn-light" disabled={!amount} onClick={handleCreate}>Withdraw</button>
                </>
                ):(
                <>
            <h5>Success</h5>
            {"Balance:  $"+balance}<br/>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw More Money!</button>
                
                </>
            )}
    />
);
}

export default Withdraw;