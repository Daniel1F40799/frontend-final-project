import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      
      <div className={styles.section}>Tasks for the week:</div>
      <div className={styles.section}>My study groups:</div>
      <div className={styles.section}>New messages:</div>
      <button className={styles.editButton}>Profile Editing</button>
    </div>
  );
}

export default Profile;
