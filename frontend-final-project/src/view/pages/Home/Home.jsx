import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Welcome to StudyConnect - Your Hub for Tech & Science Collaboration
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.loginButton}
          onClick={() => navigate('/login')}
        >
          LOGIN
        </button>
        <button
          className={styles.registerLink}
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
