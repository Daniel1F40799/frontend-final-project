import { useState } from 'react';
import { auth, db } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './Tasks.module.css';

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskText || !taskDate) return;

    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to add a task.");
      return;
    }

    try {
      await addDoc(collection(db, 'tasks'), {
        uid: user.uid,
        text: taskText,
        date: taskDate,
        createdAt: serverTimestamp()
      });

      setTaskText('');
      setTaskDate('');
      alert('Task saved!');
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to save task.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>📝 Add a New Task</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task description"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Enter due date (e.g. 2024-06-01)"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>➕ Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default Tasks;
