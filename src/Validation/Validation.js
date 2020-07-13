// **** ****
import React from 'react';

// **** functional component - components return valid JSX ****
const validation = ( props ) => {

    // ???? ????
    console.log("props.inputLength: " + props.inputLength);

    // **** ****
    let validationMessage = 'Text long enough :o)';
    if (props.inputLength <= 5) {
        validationMessage = 'Text too short :o(';
    }

    // ???? ????
    console.log("validationMessage: " + validationMessage);
    
    // **** ****
    return (
        <div>
            {

                // // **** using ternary expression ****
                // props.inputLength > 5 ? 
                //     <p>Text long enough</p> : 
                //     <p>Text too short!</p>

                // **** ****
                <p>{validationMessage}</p>
            }
        </div>
    );
};

// **** ****
export default validation;