import { useState } from 'react';
import './App.css';

function App() {

  const [media, setMedia] = useState(false)

  const timer = () => {
    setTimeout(() => {
      setMedia(false)
    }, 1000);
  }
  const remove = () => {
    setMedia(true)
    timer()
  }

  const mediaa = ` `
  return (
    <div className="App">
      {
        media ? (
          <>
            <div className="modal">
              <h1>Succces ! Thenk you for registering</h1>
            </div>
          </>
        ) : null
      }
      <div className="container">
        <div className="register">
          <label htmlFor="chk" className='label'>Register</ label>
          <input type="text" placeholder='First Name' />
          <input type="name" placeholder='Last Name' />
          <input type="email" placeholder='Email' />
          <button className='register-btn' onClick={remove}> Register</button>
        </div>

      </div>
    </div>
  );
}

export default App;
