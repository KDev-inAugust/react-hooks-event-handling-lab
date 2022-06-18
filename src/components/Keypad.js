import React from "react";

function changeLog(){
    console.log('Entering password...')
}

function Keypad(){
    return(
       <div>
        <input type="password" onChange={changeLog}/>
        <h1>test</h1>
        </div> 
    )
}

export default Keypad