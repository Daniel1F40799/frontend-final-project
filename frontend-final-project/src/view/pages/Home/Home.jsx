import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Welcome to StudyConnect - Your Hub for Tech & Science Collaboration
      </div>
      <div className={styles.buttons}>
        <button className={styles.loginButton}>LOGIN</button>
        <button className={styles.registerLink}>Register</button>
      </div>
    </div>
  );
}

export default Home;
