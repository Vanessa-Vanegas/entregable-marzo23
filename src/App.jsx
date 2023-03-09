import { useState } from "react";
import Formulario from "./components/Form/Formulario"

const App = () => {
  const [values, setValues] = useState({
    username: "",
    mobile: "",
    address: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Ingresa tu usuario",
      errorMessage:
        "Failed authentication, Username should be 3-15 characters",
      label: "Username",
      pattern: "[a-z]{1,15}",
      required: true,
    },
    {
      id: 2,
      name: "mobilenumber",
      type: "mobilenumber",
      placeholder: "Ingresa tu numero de celular",
      errorMessage: "Please enter a mobile number!",
      label: "mobile number",
      required: true,
    },

    {
      id: 3,
      name: "address",
      type: "address",
      placeholder: "Ingresa tu direccion",
      errorMessage: "Please enter an address!",
      label: "address",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
        {inputs.map((input) => (
          <Formulario
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
