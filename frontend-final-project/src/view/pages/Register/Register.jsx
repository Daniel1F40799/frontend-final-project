import styles from './Register.module.css';

function Register() {
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationBox}>
        <h2 className={styles.registrationTitle}>Registration</h2>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className={styles.inputColumn}>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputColumn}>
            <label>Date of Birth</label>
            <input type="text" placeholder="DD/MM/YYYY" />
          </div>
          <div className={styles.inputColumn}>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
        </div>

        <button className={styles.submitButton}>SUBMIT</button>
      </div>
    </div>
  );
}

export default Register;
