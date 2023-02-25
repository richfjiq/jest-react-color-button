import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: isChecked ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => setIsChecked(e.target.checked)}
        defaultChecked={isChecked}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
