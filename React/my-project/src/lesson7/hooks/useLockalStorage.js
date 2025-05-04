import React, { useState } from 'react';
export const UseLockalStorage = (props, dataType, method) => {
    let data = JSON.parse(localStorage.getItem(dataType));
    if (data == null) {
        data = [];
    }
    switch (method) {
        case "get":
            return data;
        case "post":
            try {//data= JSON.parse(data);
                data.push(props);
                localStorage.setItem(dataType, JSON.stringify(data));
                console.log(data);
                break;
            }
            catch {
                console.log("sorry, mistake:)");
            }
            default:
                break;
    }

}
