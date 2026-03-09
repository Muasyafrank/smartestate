import { useState } from "react";

export default function AuthPage({onNavigate}){
    const [mode,setMode] = useState('login');
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);
    };

    if(submitted){
        return(
            <div className="auth-page">
                <div className="auth-card" style={{textAlign:"center"}}>
                    <div style={{fontSize:"3.5rem",color:"#c8a96e;",marginBottom:"1rem"}}>
                        <i className="ri-checkbox-circle-line"></i>
                    </div>
                    <h2>{mode === 'login' ? 'Welcome Back':'Account Created Successfully!'}</h2>
                    <p className="auth-sub">
                        {
                            mode === 'login' ? 'You have successfully logged in.':'Your account has been created. You can now log in.'
                        }
                    </p>
                    <button className="btn-primary" onClick={() => onNavigate('home')}>Go to Home</button>
                </div>
            </div>
        );
    }
    return(
       <div className="auth-page">
      <div className="auth-card">
        {mode === "login" ? (
          <LoginForm onSubmit={handleSubmit} onSwitch={() => setMode("register")} />
        ) : (
          <RegisterForm onSubmit={handleSubmit} onSwitch={() => setMode("login")} />
        )}
      </div>
    </div>
    )
}

function LoginForm({onSubmit,onSwitch}){
    return(
        <>
         <h2>Welcome Back</h2>
      <p className="auth-sub">Sign in to your SmartBomas account</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: "0.5rem" }}>
          Log In
        </button>
      </form>
      <p className="auth-toggle">
        Don't have an account?
        <a onClick={onSwitch}>Register here</a>
      </p>
        </>
    )
}
function RegisterForm({ onSubmit, onSwitch }) {
  return (
    <>
      <h2>Create Account</h2>
      <p className="auth-sub">Join the SmartBomas community</p>
      <form onSubmit={onSubmit}>
        <div className="double-input">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last" required />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Create a strong password" required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />
        </div>
        <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: "0.5rem" }}>
          Register
        </button>
      </form>
      <p className="auth-toggle">
        Already have an account?
        <a onClick={onSwitch}>Login here</a>
      </p>
    </>
  );
}