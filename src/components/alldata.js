import React from "react";
import Card from './card'
import UserContext from './userContext';
// import alldatapage from '../alldatapage.png'

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
    <Card 

        bgcolor="secondary"
        header="User Data"
        title="Welcome to the User Data Page"
        body={
        <div class="container">
  <div class="row">
    <div class="col">
      Name
    </div>
    <div class="col">
      Email
    </div>
    <div class="col">
      Password
    </div>
  </div>
{ctx.users.map(( index) => (
  <div class="row">
    <div class="col">
      {index.name}
    </div>
    <div class="col">
      {index.email}
    </div>
    <div class="col">
      {index.password1}
    </div>
  </div>))}
</div> 

} 
  />  
);


}
export default AllData;