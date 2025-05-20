import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Welcome to <span>StudyConnect</span>
        </h2>
        <p className={styles.subtitle}>
          A place to manage your tasks, connect with study groups, and track your progress.
        </p>

        {user ? (
          <div className={styles.buttons}>
            <button className={styles.dashboardButton} onClick={() => navigate('/profile')}>
              Go to Dashboard
            </button>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.buttons}>
            <button className={styles.loginButton} onClick={() => navigate('/login')}>
              Login
            </button>
            <button className={styles.registerButton} onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
