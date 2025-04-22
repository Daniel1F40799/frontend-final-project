import styles from './HelpSettings.module.css';

function HelpSettings() {
  return (
    <div className={styles.helpSettingsContainer}>
      <h1 className={styles.title}>Welcome to StudyConnect - Your Hub for Tech & Science Collaboration</h1>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h2 className={styles.subtitle}>Help & Support</h2>
          <a href="#">Frequently Asked Questions (FAQ)</a>
          <a href="#">User Guides & Tutorials</a>
          <a href="#">Additional Resources</a>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subtitle}>User Settings</h2>
          <a href="#">User Settings</a>
          <a href="#">Privacy Settings</a>
          <a href="#">Notifications</a>
          <a href="#">Language Settings</a>
        </div>
      </div>
    </div>
  );
}

export default HelpSettings;
