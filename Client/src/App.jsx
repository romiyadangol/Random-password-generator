import { useState } from "react";
import axios from 'axios';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(50);
  const [isUppercase, setUppercase] = useState(true);
  const [isLowercase, setLowercase] = useState(true);
  const [isNumber, setNumber] = useState(true);
  const [isSpecialChar, setSpecialCharacter] = useState(true);

  const generatePassword = async () => {
    try {
      const response = await axios.post('http://localhost:8000/generate-password', {
        length,
        isNumber,
        isUppercase,
        isLowercase,
        isSpecialChar,
      });
      console.log('Password generated:', response.data.password);
      setPassword(response.data.password);
    } catch (error) {
      console.error('Error generating password:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="header-wrapper">
          <h1>Random Password Generator</h1>
          <p>Create strong and secure passwords to keep your account safe online.</p>
        </div>

        <div className="input-wrapper">
          <input type="text" value={password} />
          <button onClick={generatePassword}>Regenerate</button>
        </div>

        <div className="password-generator">
          <label htmlFor="length">Password Length:{length} </label>
          <input
            type="range"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="characters-used">
          <label>Characters Used:</label>

          <div>
            <input
              type="checkbox"
              id="uppercase"
              checked={isUppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <label htmlFor="uppercase">ABC</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="lowercase"
              checked={isLowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            <label htmlFor="lowercase">abc</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="number"
              checked={isNumber}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label htmlFor="number">123</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="specialCharacter"
              checked={isSpecialChar}
              onChange={(e) => setSpecialCharacter(e.target.checked)}
            />
            <label htmlFor="specialCharacter">#$%</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
