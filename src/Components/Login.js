import React from 'react';
import axios from 'axios'; // Don't forget to import axios

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      un: document.getElementById("idun").value,
      pw: document.getElementsByName("password")[0].value
    });

    axios.post('http://localhost:8081/check', {
      un: document.getElementById("idun").value,
      pw: document.getElementsByName("password")[0].value
    }).then(response => {
      console.log(response.data);
    });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <header>
          <div align="center">
            {/* Remove the <img> tag */}
          </div>
        </header>
        <p align="center" style={{ color: 'black', fontStyle: 'italic' }}>Enter Credentials</p>
        <form align="center" onSubmit={handleSubmit} style={{ color: 'white' }}>
          <span style={{ fontStyle: 'italic', color: 'white' }}>User Name:</span> <input type="text" placeholder='' name="username" id="idun" />
          <br />
          <span style={{ fontStyle: 'italic' }}>Password:</span> <input type="password" placeholder='' name="password" />
          <br /><br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value="Login" style={{ marginRight: '10px' }} />&nbsp;&nbsp;&nbsp;
            <input type="reset" value="Clear" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
