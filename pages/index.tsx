// pages/index.tsx
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSV Upload and Process</title>
        <meta name="description" content="Upload and process CSV files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to CSV Processor!
        </h1>
        <p className={styles.description}>
          Upload your CSV file below:
        </p>

        <form action="/api/upload" method="post" encType="multipart/form-data">
          <input type="file" name="file" accept=".csv" required />
          <button type="submit">Upload File</button>
        </form>
      </main>

      <footer className={styles.footer}>
        Powered by Next.js
      </footer>
    </div>
  );
};

export default Home;
