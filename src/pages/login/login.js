import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebase/firebaseConfig";
import "../signup/signup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);
      if (user) {
        alert("Login successfully.");
        navigate("/callery");
      }
    } catch (error) {
      alert(error.message); // alert error message
    }
  };
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
