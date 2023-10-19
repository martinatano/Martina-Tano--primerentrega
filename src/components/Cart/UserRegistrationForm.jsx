import React, { useState, useContext} from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

function UserRegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const { cart, total, clearCart} = useContext(CartContext);


    const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que ambos correos electrónicos sean iguales
    if (email === confirmEmail) {
      // Aquí puedes manejar la lógica para enviar o procesar la información del formulario
      const order = {
        firstName: firstName,
        lastName: lastName,
        userEmail: email,
        phoneNumber: phone,
        userAdress: address,
        item: cart,
        total: cart.total,
        date: serverTimestamp(),
      }; 
      const db = getFirestore();
      const usersCollection = collection(db, 'orders');
      addDoc(usersCollection, order);
      const respuesta = await addDoc(usersCollection, order)
      console.log(respuesta);
      // Muestra una alerta de agradecimiento
      alert('¡Gracias por tu compra!');

      // Redirige al usuario a la página de inicio
      window.location.href = '/'; // Cambia la URL a la página de inicio
    } else {
      alert('Los correos electrónicos no coinciden. Por favor, verifica.');
    }
  };

  // Manejar cambios en el correo electrónico
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(e.target.value === confirmEmail);
  };

  // Manejar cambios en la confirmación de correo electrónico
  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    setIsEmailValid(e.target.value === email);
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
            onChange={handleEmailChange}
          />
          </div>
          <div className='form-row'>
          <TextField
            label="Confirmar Correo electrónico"
            variant="outlined"
            fullWidth
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
            error={!isEmailValid}
          />
          </div>
          <div className='form-row'>
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <Button type="submit" variant="contained" color="primary" disabled={!isEmailValid}>
            Generar orden
          </Button>
        </form>
        </div>
      )}
    </div>
  );
}

export default UserRegistrationForm;


