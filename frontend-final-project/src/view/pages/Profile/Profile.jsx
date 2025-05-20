import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styles from './Profile.module.css';

function Profile() {
  const [tasks, setTasks] = useState([]);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) return;

      const tasksQuery = query(collection(db, 'tasks'), where('uid', '==', user.uid));
      const tasksSnapshot = await getDocs(tasksQuery);
      const tasksData = tasksSnapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setTasks(tasksData);

      const groupsQuery = query(collection(db, 'studyGroups'), where('uid', '==', user.uid));
      const groupsSnapshot = await getDocs(groupsQuery);
      const groupsData = groupsSnapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setGroups(groupsData);
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteTask = async (taskId) => {
    await deleteDoc(doc(db, 'tasks', taskId));
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleDeleteGroup = async (groupId) => {
    await deleteDoc(doc(db, 'studyGroups', groupId));
    setGroups(prev => prev.filter(group => group.id !== groupId));
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Tasks:</div>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.taskItem}>
              {task.date} — {task.text}
              <button className={styles.deleteButton} onClick={() => handleDeleteTask(task.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>My study groups:</div>
        <ul className={styles.taskList}>
          {groups.map((group) => (
            <li key={group.id} className={styles.taskItem}>
              <strong>{group.groupName}</strong> — {group.project}
              <br />
              <span className={styles.groupMembers}>Members: {group.members}</span>
              <button className={styles.deleteButton} onClick={() => handleDeleteGroup(group.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>New messages:</div>
      </div>

      <button className={styles.editButton} onClick={() => navigate('/tasks')}>
        Tasks Editing
      </button>

      <button className={styles.editButton} onClick={() => navigate('/studygroups')}>
        Study Groups Editing
      </button>
    </div>
  );
}

export default Profile;
