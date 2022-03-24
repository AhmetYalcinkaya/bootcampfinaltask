import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerwrapper">
        <h1 className="regtitle">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input className="reisterinput" placeholder="name" />
          <input className="reisterinput" placeholder="last name" />
          <input className="reisterinput" placeholder="username" />
          <input className="reisterinput" placeholder="email" />
          <input className="reisterinput" placeholder="password" />
          <input className="reisterinput" placeholder="confirm password " />
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="regbutton">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
