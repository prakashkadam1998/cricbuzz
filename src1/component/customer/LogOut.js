import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    useNavigate,
    Route,
    Link
  } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';


export default function LogOut() {
  let navigate= useNavigate();
    var profile=JSON.parse(sessionStorage["custdata"]);
   let clear=()=>{
        console.log(profile.custName);
        sessionStorage.clear();
        navigate("/login");
    }
      

    return (
        <div>
          <div> <h1> Succefully Logged out   !!!!!!</h1></div> 
          <h2> {profile.custName} </h2> 

          <h3>Thank You  ........Visit Again</h3>
            <Button variant="primary" type="button" onClick={clear} >Back</Button>
        </div>
    )
}
