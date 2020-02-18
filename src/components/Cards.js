import React from 'react';
import ContactCard from './ContactCard';

const Cards = props => {
    const cards = props.data.map(contact => (
        <ContactCard info={contact} key={contact.id} />
      ));
    return(
        <div className="row">
          {this.state.cards}
          {cards}
          {this.state.allContacts.length === 0 && (
            <div className="button-box center-align"></div>
          )}
        </div>
    )
}

export default Cards;