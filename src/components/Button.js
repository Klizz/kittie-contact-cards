import React from "react";

const Button = props => {
  return (
      <button
        className={props.btnStyle}
        title={props.title}
        onClick={props.action}
      >
        <i class="material-icons">{props.iconTitle}</i>
      </button>
  );
};

export default Button;
