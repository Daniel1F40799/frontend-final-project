import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/studygroups">Study Groups</Link>
      <Link to="/helpsettings">Help & Settings</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/admin/KPIs">KPI</Link>
      <Link to="/register" className={styles.register}>Register</Link>
    </nav>
  );
}

export default Navigation;
