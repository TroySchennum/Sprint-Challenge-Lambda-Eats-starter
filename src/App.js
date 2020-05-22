import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Components/Home'
import PizzaForm from './Components/PizzaForm';

import { Switch, Route, Link, Router } from 'react-router-dom';




const App = () => {
  return (
    <div>

      <nav className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pizza-form'>Pizza</Link>
        </li>
      </nav>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>



      <Route path='/'>
        <Home />
      </Route>

      <Route path='/pizza-form'>
        <PizzaForm />
      </Route>

    </div>

  );
};
export default App;
