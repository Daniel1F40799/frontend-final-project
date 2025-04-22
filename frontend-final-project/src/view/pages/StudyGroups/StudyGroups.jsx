import styles from './StudyGroups.module.css';

function StudyGroups() {
  return (
    <div className={styles.studyGroupsContainer}>
      <h1 className={styles.title}>Welcome to StudyConnect - Your Hub for Tech & Science Collaboration</h1> 
      <div className={styles.groupsGrid}>
        <div className={styles.groupLink}>Group - 1</div>
        <div className={styles.groupLink}>Group - 4</div>
        <div className={styles.groupLink}>Group - 2</div>
        <div className={styles.groupLink}>Group - 5</div>
        <div className={styles.groupLink}>Group - 3</div>
        <div className={styles.groupLink}>Group - 6</div>
      </div>
    </div>
  );
}

export default StudyGroups;
