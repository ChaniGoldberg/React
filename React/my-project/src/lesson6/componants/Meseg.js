import React, { useState, useRef, useEffect } from 'react';


const Meseg = () => {
    const [meseges, setMeseges] = useState([]);
    const [ms, setMs] = useState("");
    const pointEnd = useRef(null);
    useEffect = (() => {
        pointEnd.current.scrollIntoView({  block: "end", inline: "nearest" });
    }, [meseges]);
    const focusEnd = () => {
        setMeseges([...meseges, ms]);
    }
    return (
        <>
            <p>enter your mesege!!!!</p>
            <input type='text' onChange={(e) => setMs(e.target.value)}></input>
            <button onClick={() => focusEnd()}></button>
            <h1>your mesegess list:</h1>
            <div ref={pointEnd}>
                {meseges.map((m, index) => {
                    return (
                        <div>
                            <h5>mesege number {index}</h5>
                            <p>{m}</p>
                        </div>)
                })}
            </div>
        </>
    )
}



export default Meseg;