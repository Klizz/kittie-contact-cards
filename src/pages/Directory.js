import React, { Component } from "react";
import ContactCard from "../components/ContactCard";
import contactsData from "../components/ContactData";
import Form from "../components/Form";
import Button from '../components/Button';


class Directory extends Component {
      state = {
      newContact: {
        name: '',
        website: '',
        phone: '',
        email: ''
      },
      allContacts: contactsData
    }

    componentDidMount() {
      const url = 'https://jsonplaceholder.typicode.com/users';
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          allContacts: data
        })
      })
    }

    handleInput = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      let website = e.target.image;
      let email = e.target.email;
      let phone = e.target.phone
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value,
            [website]: value,
            [email]: value,
            [phone]: value
          }
        })
      );
    }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.newContact;
      this.setState(prevState => ({
      allContacts: [...prevState.allContacts, userData],
      newContact: {
        name: '',
        imgUrl: '',
        email: '',
        phone: ''
      } 
    }));
  }

  clearForm = (e) => {
    e.preventDefault();
    this.setState({
        newContact: {
        name: '',
        imgUrl: '',
        email: '',
        phone: ''
        }
    });
  }

  render() {
    const cards = this.state.allContacts.map(contact => (
      <ContactCard info={contact} key={contact.id} />
    ));
    return (
      <div>
        <div className="form-box grey lighten-5">
          <h5>Agrega un contacto nuevo</h5>
        <Form 
        name="Nombre"
        type="text"
        value={this.state.newContact.name}
        placeholder="Nombre"
        handleChange={this.handleInput}
        required
        />
        <Form 
        name="website"
        type="text"
        value={this.state.newContact.website}
        placeholder="Website"
        handleChange={this.handleInput}
        required
        />
        <Form 
        name="Correo"
        type="email"
        value={this.state.newContact.email}
        placeholder="email"
        handleChange={this.handleInput}
        required
        />
        <Form 
        name="Telefono"
        type="number"
        value={this.state.newContact.phone}
        placeholder="Telefono"
        handleChange={this.handleInput}
        required
        />
        < Button
        btnStyle="btn-floating btn-large waves-effect waves-light green"
        action={this.handleFormSubmit}
        title="Agregar contacto"
        iconTitle="add"
        />
        < Button
        btnStyle="btn-floating btn-large waves-effect waves-light red"
        action={this.clearForm}
        title="Borrar contacto"
        iconTitle="delete"
        />
        </div>
        <div className="row">
          {this.state.cards}
          {cards}
        </div>
      </div>
    );
  }
}

export default Directory;