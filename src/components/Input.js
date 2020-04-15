import React from 'react';

const Input = (props) => {
  console.log(props);
    return (
        <div className="form-group">
            <input
                className="form-control"
                id={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                onKeyDown={props.disableSpaces}/>
        </div>
    );
};

export default Input;
