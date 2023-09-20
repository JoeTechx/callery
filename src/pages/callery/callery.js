import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import  LogoWhite from "../../Assets/logo white.png"

const Callery = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const submit = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Signed Out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <>

   < Link to="/carllery">
    <img src={LogoWhite} alt=""/>
   </Link>
      {authUser ? (
        <h2>Welcome {authUser.email.length > 6 ? (authUser.email.substr(0, 6)) + "..." : authUser.email}</h2>
      ) : (
        <Link to="/">login</Link>
      )

      }
      <button className="logout" onClick={submit}>
        Logout
      </button>
    </>
  );
};

export default Callery;
