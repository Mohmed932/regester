import "./Login.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const text = useRef();
  const password = useRef();
  const checkedText = useRef();
  const checkedPassword = useRef();
  const handelSaved = () => {
    if (/^([a-zA-Z1-9])+|w+$/i.test(text.current.value)) {
      checkedText.current.style.display = "none";
    } else {
      checkedText.current.style.display = "block";
    }
    if (password.current.value.length > 8) {
      checkedPassword.current.style.display = "none";
    } else {
      checkedPassword.current.style.display = "block";
    }
  };
  return (
    <div className="Login">
      <div className="Login-Card">
        <div className="Login-left">
          <h1>
            Hellow
            <br /> Word.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="Login-right">
          <h1>Login</h1>
          <div>
            <input type="text" placeholder="UserName" ref={text} />
            <p ref={checkedText} className="worinng">
              please type userName as Mohmed123
            </p>
          </div>
          <div>
            <input type="password" placeholder="Password" ref={password} />
            <p ref={checkedPassword} className="worinng">
              b The password must contain more than 8 characters
            </p>
          </div>
          <button onClick={handelSaved}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
