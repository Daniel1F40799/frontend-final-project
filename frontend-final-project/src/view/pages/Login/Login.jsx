import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit" className={styles.loginButton}>LOGIN</button>

          <div className={styles.links}>
            <p onClick={() => navigate('/register')}>Don't have an account? Register</p>
            <p className={styles.forgot}>Forgot your password?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
