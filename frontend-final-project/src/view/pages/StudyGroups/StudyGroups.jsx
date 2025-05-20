import { useState } from 'react';
import { auth, db } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './StudyGroups.module.css';

function StudyGroups() {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || !groupName || !members || !project) return;

    try {
      await addDoc(collection(db, 'studyGroups'), {
        uid: user.uid,
        groupName,
        members,
        project,
        createdAt: serverTimestamp()
      });
      setGroupName('');
      setMembers('');
      setProject('');
      alert('Group saved!');
    } catch (error) {
      console.error('Error saving group:', error);
      alert('Failed to save group.');
    }
  };

  return (
    <div className={styles.studyGroupsContainer}>
      <h1 className={styles.title}>Create a New Study Group</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Members (comma separated)"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Shared Project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>➕ Add Group</button>
      </form>
    </div>
  );
}

export default StudyGroups;
