import React from "react";
import './landmarks.css'
function Landmarks(){
    let info = [
        {
            name : 'Great Wall Of China',
            location : 'Huairou District',
            country : 'China'
        },
        {
            name : 'Taj Mahal',
            location : 'Agra',
            country : 'India'
        },
        {
            name : 'Eiffel Tower',
            location : 'Paris',
            country : 'France'
        },
        {
            name : 'The Statue of Liberty',
            location : 'New York',
            country : 'USA'
        }
    ]

    return(
        <div>
            {info.map(a=>(
                <div className="land">
                    <h1>{a.name}</h1>
                    <p><b>Location: </b>{a.location}</p>
                    <p><b>Country: </b>{a.country}</p>
                </div>
            ))}
        </div>
    )
}

export default Landmarks;
