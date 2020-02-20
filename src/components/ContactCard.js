import React from "react";


const ContactCard = props => (
  <div>
    <div className="col s4">
      <div className="card">
          <span className="card-title">{props.info.name}</span>
        <div className="card-content">
          <p><b>Telefono:</b> {props.info.phone}</p>
          <p><b>Website:</b> {props.info.website}</p>
          <p><b>Email:</b> {props.info.email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactCard;
