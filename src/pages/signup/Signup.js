import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { auth }  from "../../firebase/firebaseConfig";
import "./signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
        createUserWithEmailAndPassword( auth, email, pass)
        .then((userCredential) => {
      if (userCredential) {
        alert("Account is successfully created.");
        navigate("/");
      }})
      .catch((error) => { 
        alert(error.message); // alert error message
  });
}

  return (
    <>
      <div className="sign_up-container">
        <div className="sign_up-header">
          <h2>Sign Up</h2>
        </div>

        <div className="sign_up-box">
          <input
            type="text"
            value={name}
            placeholder="UserName"
            onChange={(e) => setName(e.target.value)}
          />
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
          Already have an account? <Link to="/">Login Now</Link>
        </p>
        <button onClick={submit}>Sign up</button>
      </div>
    </>
  );
};

export default Signup;
