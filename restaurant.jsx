import React from "react";
import './restaurant.css';

function Restaurant(){
    let menu=[
        {
        resName: 'BurgerMan',
        resMenu: ['Fries','Chicken Burger','Crispy Chicken','Chicken Popcorn']
        },
        {
        resName: 'California Burrito',
        resMenu: ['Rice Bowl','Chicken Burrito','Peach Ice Tea']
        },
        {
        resName: 'Empire Hotel',
        resMenu: ['Butter Chicken','Ghee Rice','Grilled Chicken','Mutton Biryani']
        },
    ]

    return(
        <div>
            {menu.map(a=>(
                <div className="menucard">
                    <ul>
                        <li><h2>{a.resName}</h2></li>
                        <ol>
                            {a.resMenu.map(b=>(
                                <li>{b}</li>
                            ))}
                        </ol>
                    </ul>
                </div>
            ))}
        </div>
    )

}

export default Restaurant