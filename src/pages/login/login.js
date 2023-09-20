import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../firebase/firebaseConfig";
import "../signup/signup.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
 signInWithEmailAndPassword(auth, email, pass)
 .then((userCredential) => {
  alert("Login successful")
    console.log(userCredential)
    navigate("/callery")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    console.log(errorCode);
    console.log(errorMessage);
  });
  }
  return (
    <>
      <div className="sign_up-container">
        <div className="sign_up-header">
          <h2>Login</h2>
        </div>

        <div className="sign_up-box">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sign_up-box">
          <input
            type="password"
            value={pass}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <p>
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
        <button onClick={submit}>Login</button>
      </div>
    </>
  );
};

export default Login;
