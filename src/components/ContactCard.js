import React from "react";


const ContactCard = props => (
  <div>
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={props.info.imgUrl} alt="Not found"></img>
          <span className="card-title">{props.info.name}</span>
        </div>
        <div className="card-content">
          <p><b>Telefono:</b> {props.info.phone}</p>
          <p><b>Email:</b> {props.info.email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactCard;
