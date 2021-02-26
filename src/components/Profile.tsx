import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="icons/user.png" alt="Barroso" />
      <div>
        <strong>Your name</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
      </div>
    </div>
  );
}