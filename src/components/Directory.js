import React, { Component } from "react";
import ContactCard from "./ContactCard";
import contactsData from "./ContactData";
import Form from "./Form";
import Button from './Button';

/*

IMAGENES PARA TESTEAR

https://i.pinimg.com/originals/9f/c2/a0/9fc2a0d3ab30d9c20322714eeb66417b.jpg
https://www.warrenphotographic.co.uk/photography/bigs/45832-Silver-tabby-cat-sitting-on-blue-background.jpg

*/


class Directory extends Component {
  constructor() {
    super();
    this.state = {
      newContact: {
        id: '',
        name: '',
        imgUrl: '',
        phone: '',
        email: ''
      },
      allContacts: contactsData
    };
    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact,
          name: value
        }
      })
    )
  }

  handleImage(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact,
          imgUrl: value
        }
      })
    )
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact,
          email: value
        }
      })
    )
  }

  handlePhone(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact,
          phone: value
        }
      })
    )
  }

  handleFormSubmit(e) {
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

  clearForm(e) {
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
        handleChange={this.handleName}
        required
        />
        <Form 
        name="Image URL"
        type="text"
        value={this.state.newContact.imgUrl}
        placeholder="Image URL"
        handleChange={this.handleImage}
        required
        />
        <Form 
        name="Correo"
        type="email"
        value={this.state.newContact.email}
        placeholder="email"
        handleChange={this.handleEmail}
        required
        />
        <Form 
        name="Telefono"
        type="number"
        value={this.state.newContact.phone}
        placeholder="Telefono"
        handleChange={this.handlePhone}
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