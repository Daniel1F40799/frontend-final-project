import styles from './Admin.module.css';
import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <div className={styles.adminContainer}>
      <div className={styles.header}>ADMIN PAGE</div>
      <div className={styles.linksContainer}>
        <Link to="/admin/users" className={styles.link}>ניהול משתמשים (User Management)</Link>
        <Link to="/admin/content" className={styles.link}>ניהול תוכן (Content Management)</Link>
        <Link to="/admin/reports" className={styles.link}>דוחות וסטטיסטיקות (Reports & Analytics)</Link>
        <Link to="/admin/system" className={styles.link}>הגדרות מערכת (System Settings)</Link>
        <Link to="/admin/permissions" className={styles.link}>ניהול הרשאות (Permissions Management)</Link>
        <Link to="/admin/dashboard" className={styles.link}>לוח בקרה ראשי (Main Dashboard)</Link>
      </div>
    </div>
  );
}

export default AdminPage;
