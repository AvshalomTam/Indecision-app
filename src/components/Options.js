import React from 'react';
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            Your Options:
            <button onClick={props.hanleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    hanleDeleteOption = {props.hanleDeleteOption}/>
                ))
            }
        </div>
    );
};

export default Options;