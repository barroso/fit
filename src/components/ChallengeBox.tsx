import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completChallenge();
    resetCountdown();
  }
  
  function handleChallengeFailed () {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button onClick={handleChallengeFailed} type="button" className={styles.challengeFailedButton}>Falhei</button>
            <button onClick={handleChallengeSucceeded} type="button" className={styles.challengeSuccededButton}>Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber desafios</strong>
            <p>
              <img src='icons/level-up.svg' alt="Level Up" />
                            Avance de level completando os desafios.
                        </p>
          </div>
        )
      }
    </div>
  );
}