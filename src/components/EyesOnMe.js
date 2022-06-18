import React from "react";


function focusFunction(){
    console.log('Good!')
}

function blurFunction(){
    console.log('Hey! Eyes on me!');
}

function EyesOnMe(){
    return(
        <button onFocus={focusFunction} onBlur={blurFunction}>'Eyes on me'</button>
    )
}

export default EyesOnMe
