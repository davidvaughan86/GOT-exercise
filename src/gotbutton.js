import React from 'react'


export default function gotButton(props){
    return (
        <div>
            <button onClick={props.getGot}
            >
                Get GoT
            </button>
              
        </div>
        
    )
}