
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import Form from './Form'


function PizzaForm() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}

export default PizzaForm;
