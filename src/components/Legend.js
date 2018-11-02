import React from 'react';
import './Grid.css';

const Legend = () => {
    return ( 
        <div className="legend-container">
            <span> Legend: </span>

            <div className="legend blue"> </div>
            <span> Mining Node </span>

            <div className="legend red" > </div>
            <span> Bot </span>

            <div className="legend purple" > </div>
            <span> Bot and Node on the Same Square </span>

            <div className="legend white" style={{borderColor: 'black', borderWidth: '1px', border: '1px solid'}}> </div>
            <span> Empty </span>
        </div>
     );
}
 
export default Legend;