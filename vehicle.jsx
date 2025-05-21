import React from "react";
import './vehicle.css';
function Vehicle(){
    let info=[
            {model: '1',
            manufacturer:'1',
            year:'1998',
            fuel:'petrol'}
        ,
        
            {model: '2',
            manufacturer:'2',
            year:'1992',
            fuel:'petrol'}
        ,
        
            {model: '3',
            manufacturer:'3',
            year:'2018',
            fuel:'diesel'}
        ,
        
            {model: '4',
            manufacturer:'4',
            year:'2010',
            fuel:'petrol'}
        ,
        
            {model: '5',
            manufacturer:'5',
            year:'2005',
            fuel:'petrol'}
        
    ]

    return(
        <div>
            {info.map(a=>(
                <div className="card">
                    <h3>Vehicle information</h3>
                    <p><b>Model: </b>{a.model}</p>
                    <p><b>Manufacturer: </b>{a.manufacturer}</p>
                    <p><b>Year: </b>{a.year}</p>
                    <p><b>Fuel type: </b>{a.fuel}</p>
                </div>
            ))}
        </div>
    )
}

export default Vehicle;