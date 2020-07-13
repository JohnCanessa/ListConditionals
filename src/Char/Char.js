// **** ****
import React from 'react';

// **** functional component - components return valid JSX ****
const char = ( props ) => {

    // **** in-line style ****
    const style = {
        display: 'inline-block',
        padding: '16px', 
        margin: '16px', 
        border: '1px solid black',
        textAlign: 'center'
    };

    // **** ****
    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
}

// **** ****
export default char;