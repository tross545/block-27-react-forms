import React, {useState}  from 'react';
import Authenticate from "./components/Authenticate/Authenticate";
import SignupForm from "./components/SIgnupForm/SignupForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <h2>Token: {token}</h2>
      <SignupForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  )
}

export default App
