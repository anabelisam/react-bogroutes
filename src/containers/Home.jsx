import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <div className="Home-container">
      <h1>Welcome to BogRoutes</h1>
      <h2><Link to="/login">Login</Link> to start</h2>
    </div>
  </div>
);

export default Home;