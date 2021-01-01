import React from 'react';

import gibberish from "../gibberishdb/gibbDB";
export default function GibberishAndAnswer(props) {

    const { gibb, generateRandomGibb } = props;
    return (
        <div className="container" >
            
            <div className="gibb-container">
            <p> </p>
            
                <p >{gibb.gibb}</p>
            </div>
                
                <button 
                    onClick={() => { generateRandomGibb(gibberish) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate gibberish</button>
               
            
        </div>
    )
}
