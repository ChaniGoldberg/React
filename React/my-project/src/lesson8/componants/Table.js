import React, { useState, useRef, useEffect } from 'react';


const Table = () => {
    const users=[{firstName:"moshe",lastName:"Cohen",age:9},{firstName:"moshe",lastName:"Cohen",age:9},{firstName:"kaila",lastName:"Levi",age:14},{firstName:"rut",lastName:"samuel",age:50},{firstName:"yeuda",lastName:"Goldman",age:15}]
    const [params, setParams] = useState("");

getTableContent = (arr) => {
    {arr.map(item => {
        return (
          <tr key={item.firstName}>
            <td>{ item.lastName}</td>
            <td>{ item.age }</td>
          </tr>
        );
      })}
    }

    getTableContent = (arr) => {
        const iterateItem = (item) => {
           return item.map(function (nextItem, j) {
             return (
                <tr key={nextItem.type}>
                   <td>{nextItem.type}</td>
                   <td>{nextItem.count}</td>
                </tr>
             );
           })
        }
        return arr.map(function (item, i) {
            return (
                <table key={item.productType}>
                <thead>{item.productType}</thead>
                    <tbody>
                        {iterateItem(item.contents)}
                    </tbody>
                </table>
            );
        });
    };
    


    return (
        <>
            <h1>User Table:</h1>
           <div>{this.getTableContent(users)}</div>
        </>
    )
}



export default Table;