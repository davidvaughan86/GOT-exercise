import React from 'react'


export default function charDisplay(props) {
    return(
        <div> 
            <p> this is the GOT character</p>
                <ul>
                    <li>Character:</li>
                        <ul>{props.name}</ul>
                    <li>Sex:</li>
                        <ul>{props.gender}</ul>
                    <li>Alias:</li>
                        <ul>{props.alias}</ul>
                </ul>
                
        </div>
       
    )
}