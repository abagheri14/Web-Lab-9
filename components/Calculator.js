
import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
      return;
    }

    if (value === '=') {
      try {
        const result = eval(display);
        setDisplay(String(result));
      } catch (err) {
        setDisplay('Error');
      }
      return;
    }


    if (display === '0' || display === 'Error') {
      setDisplay(String(value));
    } else {
      setDisplay(display + String(value));
    }
  };

  return (
    <div
      id="calculator-container"
      style={{
        maxWidth: '260px',
        margin: '40px auto',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '16px' }}>Calculator</h1>

      {/* Display field */}
      <input
        id="display"
        type="text"
        value={display}
        readOnly
        style={{
          width: '100%',
          height: '40px',
          fontSize: '1.2rem',
          textAlign: 'right',
          marginBottom: '12px',
          padding: '4px 8px',
        }}
      />

      {/* Buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
        }}
      >
        {/* Row 1 */}
        <button id="btn-7" onClick={() => handleButtonClick('7')}>7</button>
        <button id="btn-8" onClick={() => handleButtonClick('8')}>8</button>
        <button id="btn-9" onClick={() => handleButtonClick('9')}>9</button>
        <button id="btn-divide" onClick={() => handleButtonClick('/')}>/</button>

        {/* Row 2 */}
        <button id="btn-4" onClick={() => handleButtonClick('4')}>4</button>
        <button id="btn-5" onClick={() => handleButtonClick('5')}>5</button>
        <button id="btn-6" onClick={() => handleButtonClick('6')}>6</button>
        <button id="btn-multiply" onClick={() => handleButtonClick('*')}>*</button>

        {/* Row 3 */}
        <button id="btn-1" onClick={() => handleButtonClick('1')}>1</button>
        <button id="btn-2" onClick={() => handleButtonClick('2')}>2</button>
        <button id="btn-3" onClick={() => handleButtonClick('3')}>3</button>
        <button id="btn-subtract" onClick={() => handleButtonClick('-')}>-</button>

        {/* Row 4 */}
        <button id="btn-0" onClick={() => handleButtonClick('0')}>0</button>
        <button id="btn-clear" onClick={() => handleButtonClick('C')}>C</button>
        <button id="btn-add" onClick={() => handleButtonClick('+')}>+</button>

        {/* Row 5 */}
        <button
          id="btn-equals"
          onClick={() => handleButtonClick('=')}
          style={{ gridColumn: 'span 4', height: '40px', fontWeight: 'bold' }}
        >
          =
        </button>
      </div>
    </div>
  );
}
