import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function UserRegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes manejar la lógica para enviar o procesar la información del formulario
    const userData = {
      firstName,
      lastName,
      email,
      address,
    };

    console.log(userData); // Muestra los datos en la consola para demostración
    alert('¡Gracias por tu compra!');
    window.location.href = '/';
    // Marca el formulario como enviado
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <Typography variant="h6">¡Gracias por tu compra!</Typography>
      ) : (
        <div className="form-container">
          <h5 >Por favor ingrese sus datos</h5>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          </div>
          <div className='form-row'>
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
           </div>
           <div className='form-row'>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className='form-row'>
          <TextField
            label="Dirección"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
           </div>
          <div className="button-container">
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
}

export default UserRegistrationForm;

