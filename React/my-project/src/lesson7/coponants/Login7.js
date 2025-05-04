import React, { useState } from 'react';
import Login, { } from '@react-login-page/page5';

import {UseLockalStorage} from '../hooks/useLockalStorage';
const Login7 = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    //const {users}=UseLockalStorage('users',{},'get');
    let users={};
    const handlSubmit=(event)=>{
     event.preventDefault();
     UseLockalStorage( { name: name, password: password },'users', 'post');
     setName("");
     setPassword("");
    };
    return (
        <>
            <Login style={{ height: 780 }} >
                <Login.Username onChange={(e) => setName(e.target.value)}></Login.Username>
                <Login.Password onChange={(e) => setPassword(e.target.value)}></Login.Password>
                <Login.Submit onClick={handlSubmit}></Login.Submit>
            </Login>
            <p></p>

        </>
    )
}
export default Login7;

