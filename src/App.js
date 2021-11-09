import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {

  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorText, setErrorText] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.roll
    }
    setMembers(members.concat(newMember))
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>Form App</h1>
      <h3 className="error-text">{errorText}</h3>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {members.map((member, idx) => {
        return (
          <Member key={idx} details={member} />
        )
      })
      }
    </div>
  );
}

export default App;
