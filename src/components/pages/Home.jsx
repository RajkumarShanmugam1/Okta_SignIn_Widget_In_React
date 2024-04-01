import React from 'react';
import logo from "./logo512.png"

const Home = () => {
  return (
    <div id="container" className="d-flex justify-content-center align-items-center">
      <h1>Welcome OKTA Login</h1>
      <img src={logo} className="App-logo" alt="logo" height={500} width={500}/>
    </div>
  );
};

export default Home;