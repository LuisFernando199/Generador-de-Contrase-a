
import './app.css'
import { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleUppercaseChange = () => {
    setUppercase(!uppercase);
  };

  const handleLowercaseChange = () => {
    setLowercase(!lowercase);
  };

  const handleNumbersChange = () => {
    setNumbers(!numbers);
  };

  const handleSymbolsChange = () => {
    setSymbols(!symbols);
  };

  const generatePassword = () => {
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+";

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(`${name}-${password}`);
  };

  return (
    <div className="App">
      <h1>Generador de Contraseñas</h1>
      <div>
        <label>Tu Nombre:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Longitud de la contraseña:</label>
        <input type="number" min="1" max="100" value={length} onChange={handleLengthChange} />
      </div>
      <div>
        <label>Incluir letra Mayúscula:</label>
        <input type="checkbox" checked={uppercase} onChange={handleUppercaseChange} />
      </div>
      <div>
        <label>Incluir letra Minúscula:</label>
        <input type="checkbox" checked={lowercase} onChange={handleLowercaseChange} />
      </div>
      <div>
        <label>Incluir Numeros:</label>
        <input type="checkbox" checked={numbers} onChange={handleNumbersChange} />
      </div>
      <div>
        <label>Incluir Simbolos:</label>
        <input type="checkbox" checked={symbols} onChange={handleSymbolsChange} />
      </div>
      <button onClick={generatePassword}>Generar Contraseña</button>
      {password && (
        <div>
          <label>Tu Contraseña:</label>
          <input type="text" value={password} readOnly />
        </div>
      )}
      <div></div>
      &copy; LuisFer
    </div>
  );
}

export default App;
