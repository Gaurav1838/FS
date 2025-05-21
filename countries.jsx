import React from "react";
import './countries.css';

function Countries(){
    let info = [
        {
            key : '1',
            name : 'India',
            capital : 'New Delhi'
        },
        {
            key : '2',
            name : 'Ireland',
            capital : 'Dublin'
        },
        {
            key : '3',
            name : 'France',
            capital : 'Paris'
        },
        {
            key : '4',
            name : 'England',
            capital : 'London'
        },
        {
            key : '5',
            name : 'Spain',
            capital : 'Madrid'
        },
        {
            key : '6',
            name : 'Italy',
            capital : 'Rome'
        }

    ]

    return(
        <div>
            <ul>
                {info.map(a=>(
                    <div className="list">
                    <li key = {a.key}> <b>Country name: </b> {a.name} <br></br><b>Capital: </b> {a.capital}</li>
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default Countries;