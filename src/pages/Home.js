import React from 'react';

const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <div className="form">
          <input className="input-form" type="text" placeholder="email"/>
          <input className="input-form" type="password" placeholder="contraseña"/>
          <a class="waves-effect waves-light btn" href="/directory">Entrar</a>
        </div>
      </div>
    );
}

export default Home;