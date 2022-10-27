import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const checkedUsername = useRef();
  const checkedEmail = useRef();
  const checkedPassword = useRef();
  const checkedName = useRef();
  const Username = useRef();
  const Email = useRef();
  const Password = useRef();
  const Name = useRef();
  const handelCheked = () => {
    const CkUs = /^([a-zA-Z1-9])+|w+$/i.test(checkedUsername.current.value);
    const CkPs = checkedPassword.current.value.length > 8;
    const CkNm = /([a-zA-Z])+\s([a-zA-Z])+/i.test(checkedName.current.value);
    const CkEm = /^([a-zA-Z1-9])+@([a-zA-Z])+.(com|net|org|io)$/i.test(
      checkedEmail.current.value
    );
    CkUs
      ? (Username.current.style.display = "none")
      : (Username.current.style.display = "block");
    CkEm
      ? (Email.current.style.display = "none")
      : (Email.current.style.display = "block");
    CkPs
      ? (Password.current.style.display = "none")
      : (Password.current.style.display = "block");
    CkNm
      ? (Name.current.style.display = "none")
      : (Name.current.style.display = "block");
  };
  return (
    <div className="Register">
      <div className="Register-Card">
        <div className="Register-left">
          <h1>
            Hellow
            <br /> Word.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
        <div className="Register-right">
          <h1>Register</h1>
          <div className="inputs">
            <input
              type="text"
              ref={checkedUsername}
              placeholder="UserName"
              name="userName"
            />
            <p ref={Username} className="worinng">
              please type userName as Mohmed123
            </p>
          </div>
          <div className="inputs">
            <input
              type="email"
              ref={checkedEmail}
              placeholder="Email"
              name="email"
            />
            <p ref={Email} className="worinng">
              please type Password as example@gmail.com
            </p>
          </div>
          <div className="inputs">
            <input
              type="password"
              ref={checkedPassword}
              placeholder="Password"
              name="password"
            />
            <p ref={Password} className="worinng">
              b The password must contain more than 8 characters
            </p>
          </div>
          <div className="inputs">
            <input
              type="text"
              ref={checkedName}
              placeholder="Name"
              name="name"
            />
            <p ref={Name} className="worinng">
              Please enter a binary name
            </p>
          </div>
          <button onClick={handelCheked}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
