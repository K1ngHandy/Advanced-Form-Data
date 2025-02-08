import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    agree: false,
    ageRange: '',
    prize: '1',
  })

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  return (
    <form>
      <label>
        Agree to Terms of Use? 
        <input
          name='agree'
          type='checkbox'
          onChange={handleChange}
          checked={formData.agree}
        />
      </label>
      <br />
      <label>
        Age 13-19
        <input
          name='ageRange'
          value='teen'
          type='radio'
          onChange={handleChange}
          checked={formData.ageRange === 'teen'}
        />
      </label>
      <br />
      <label>
        Age 20-55
        <input 
          name='ageRange'
          value='adult'
          type='radio'
          onChange={handleChange}
          checked={formData.ageRange === 'adult'}
        />
      </label>
      <br />
      <label>
        Age 55+
        <input 
          name='ageRange'
          value='senior'
          type='radio'
          onChange={handleChange}
          checked={formData.ageRange === 'senior'}
        />
      </label>
      <br />
      <label>
        Select Your Prize:
        <select name='prize' onChange={handleChange} value={formData.prize}>
          <option value='1'>Cruise</option>
          <option value='2'>Gift Card</option>
          <option value='3'>LED TV</option>
          <option value='4'>iPhone</option>
        </select>
      </label>
    </form>
  );
}

export default App;
