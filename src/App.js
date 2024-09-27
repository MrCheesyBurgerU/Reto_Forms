import './App.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function App() {

  const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" });
  const [emailState, setEmailState] = useState(true);
  const [passwordState, setPasswordState] = useState(true);
  const [emailError, setEmailError] = useState(""); 
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });

    // Validación de contraseña en tiempo real
    const isPasswordValid = validatePassword(password);
    setPasswordState(isPasswordValid);
    setPasswordError(isPasswordValid ? "" : "Your password should be have numbers and letters and should be at least 9 characters long.");
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const validatePassword = (password) => {
    return password.length >= 9 && /\d/.test(password) && /[a-zA-Z]/.test(password); 
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const clickSubmit = () => {
    const isEmailValid = validateEmail(formValues.email);
    setEmailState(isEmailValid);
    setEmailError(isEmailValid ? "" : "Your email should follow a stablished format.");

    // Llama a onSubmit si todo es válido
    if (isEmailValid && passwordState) {
      onSubmit(); 
    }
  };

  const onSubmit = () => {
    alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            isInvalid={!emailState}
          />
          {emailError && <Form.Text className="text-muted">{emailError}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            isInvalid={!passwordState}
          />
          {passwordError && <Form.Text className="text-muted">{passwordError}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange} value={formValues.favClass}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
