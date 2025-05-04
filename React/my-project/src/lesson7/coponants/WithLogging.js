import React from 'react';


const WithLogging = (Componant) => {

    return function(props)
    {
        console.log("hellow "+props.name);
        return(
            <>
            <Componant {...props}></Componant>
            <br></br>
            </>
        )
    }
}



export default WithLogging;