import React from "react";
import Card from './card'
import alldatapage from '../alldatapage.png'


function Home(){ 
       
    return (
        <Card 
            bgcolor="secondary"
            header="Your Banking App."
            // background-size= "contain"
            title="Welcome to Your Bank. the Bad Bank..."
            text="Please deposit all your money here. We'll take good care of it. Please Do Not Withdraw any money. Thank you."
            body={(<img src={alldatapage} className="img-fluid" alt="Responsive"/>)}
        />
    );
}
export default Home;