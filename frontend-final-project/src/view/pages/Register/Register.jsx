import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import styles from './Register.module.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationBox}>
        <h2 className={styles.registrationTitle}>Registration</h2>

        <form onSubmit={handleSubmit}>
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
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputColumn}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
