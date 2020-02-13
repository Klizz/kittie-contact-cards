import React from "react";

const ContactCard = props => (
  <div>
    <div class="col s4">
      <div class="card blue lighten-4">
        <div class="card-image">
          <img src={props.info.imgUrl} alt="Not found"></img>
          <span class="card-title">{props.info.name}</span>
        </div>
        <div class="card-content">
          <p><b>Telefono:</b> {props.info.phone}</p>
          <p><b>Email:</b> {props.info.email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactCard;
