import React from 'react';

const StarShipCard = ({starShips}) => {
    return (
        // {starShips.map(starShip=><p>{starShip.name}</p>)}
        <div className="flex-container">
            {
                starShips.map(starShip =>{
                    
                   return <div >{starShip.name}</div>
                })
            }
            
        </div>
    )
};

export default StarShipCard;