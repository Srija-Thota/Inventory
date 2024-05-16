import { Link } from 'react-router-dom';
import './homepage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="content">
      <h1 className="heading">Foodicted</h1>
          <div className="buttons">
          <div className="buttons-container">
          <p className="already-have-account">Already have an account? </p>

          <Link to="/login" className="login-button">Log In</Link>
          <p  className="or" >or</p>
          <Link to="/signup"className="register-button">Register</Link>
       </div>
     </div>
     </div>
        </div>
    
    
  );
}

export default HomePage;
