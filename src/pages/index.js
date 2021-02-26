import Head from 'next/head'; 
import { Profile } from '../components/Profile';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletedChallenges } from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fit App</title>
      </Head>
      <ExperienceBar />

      <section>
          <div>
            <Profile />
            <CompletedChallenges />
          </div>
      </section>
    </div>
  )
}
