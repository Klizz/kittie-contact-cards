import React, { Component } from "react";
import ContactCard from "./ContactCard";
import ContactsData from "./ContactData";

class Directory extends Component {
    constructor () {
      super();
      this.state = {
        contacts: ContactsData
      }
    }
    render() {
      const cards = this.state.contacts.map((contact) => (
        <ContactCard info={contact} key={contact.id} />
      ));
      if (cards.length > 0) {
        return (
          <div className="row">{cards}</div>
        );
      } else {
        return(
          <h1>Aqui no hay nada</h1>
        )
      }
    }
  }

export default Directory;