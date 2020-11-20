import Head from 'next/head'
import styles from '../styles/Home.module.css'

import MyFooter from '@/components/Footer';
import MyHeader from '@/components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SPA関連の備忘録</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyHeader />
      <MyFooter />
    </div>
  )
}
