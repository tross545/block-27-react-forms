import React, {useState} from 'react'
import axios from "axios";

function SignupForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
console.log(username);

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup", 
        { username, password }
      );
      console.log(data);
      if (data.data.success) {
        setToken(data.data.token);
        setSuccess(true);
        setUsername("");
        setPassword("");
      }
    } catch(err) {
      console.log(err.message);
    }
  }
  return (
    <div>
      <h2>Signup Form</h2>
      {error?.message && <p>Error Signing Up</p>}
      {success && <p>Signed Up Successfully</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input 
            type="text" 
            value= {username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>
        <label>
          <p>Password:</p>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button style={{ display: "block" }}>Submit</button>
      </form>
    </div>
  )
}

export default SignupForm
