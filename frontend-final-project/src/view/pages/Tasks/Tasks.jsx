import styles from './Tasks.module.css';

function Tasks() {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.section}>Tasks for the week:</div>
      <div className={styles.section}>Tasks for the month:</div>
      <div className={styles.section}>Tasks I submitted:</div>
    </div>
  );
}

export default Tasks;
