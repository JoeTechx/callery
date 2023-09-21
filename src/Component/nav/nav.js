import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import  LogoWhite from "../../Assets/logo whitewhite.png"
import "./nav.css"

const Nav = () => {
    
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
  <nav className="nav_container">
     < Link to="/carllery" className="nav_logo">
      <img src={LogoWhite} alt="" className="logo"/>
     </Link>
     
     <div className="wel_auth">
        {authUser ? (
          <h2>Hi! {authUser.email.length > 6 ? (authUser.email.substr(0, 6)) + "..." : authUser.email}</h2>
        ) : (
          <Link to="/">login</Link>
        )
  
        }
        <button className="logout" onClick={submit}>
          Logout
        </button>
        </div>
        </nav>
      </>
    );
  };

export default Nav