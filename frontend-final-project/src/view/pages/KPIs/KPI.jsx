import styles from './KPI.module.css';

function KPI() {
  return (
    <div className={styles.kpiContainer}>
      <h2 className={styles.header}>KPI'S</h2>

      <div className={styles.kpiItem}>
        <span>Number of daily active users</span>
        <div className={styles.bar}><div className={styles.fill} style={{ width: '40%' }} /></div>
      </div>

      <div className={styles.kpiItem}>
        <span>Number of new users registered</span>
        <div className={styles.bar}><div className={styles.fill} style={{ width: '65%' }} /></div>
      </div>

      <div className={styles.kpiItem}>
        <span>Number of tasks submitted</span>
        <div className={styles.bar}><div className={styles.fill} style={{ width: '85%' }} /></div>
      </div>

      <div className={styles.kpiItem}>
        <span>Percentage of tasks completed</span>
        <div className={styles.bar}><div className={styles.fill} style={{ width: '70%' }} /></div>
      </div>

      <div className={styles.kpiItem}>
        <span>Number of active study groups</span>
        <div className={styles.bar}><div className={styles.fill} style={{ width: '50%' }} /></div>
      </div>

      <div className={styles.kpiItem}>
        <span>User engagement level</span>
        <div className={styles.bar}><div className={styles.fill} style={{ width: '30%' }} /></div>
      </div>

      <div className={styles.charts}>
        <div className={styles.pie}>%</div>
        <div className={styles.pie}>%</div>
        <div className={styles.pie}>%</div>
      </div>
    </div>
  );
}

export default KPI;
