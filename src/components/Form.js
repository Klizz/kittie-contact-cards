import React from 'react';

const Form = (props) => {
    return(
      <div className="form">
        <label htmlFor={props.name}>
          {props.title}
        </label>
        <input
          className="input-form"
          id={props.name}
          name={props.name}
          type={props.inputType}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
      </div>
    )
}

export default Form;