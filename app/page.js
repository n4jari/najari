'use client'
import { useContext } from 'react'
import Main from './(main)/Main'
import Sidebar from './(sidebar)/Sidebar'
import styles from './page.module.css'
import { AppContext } from '@/context/AppContext'

export default function Home() {
  const { open } = useContext(AppContext)
  return (
    <main className={styles.container}>
      {/* SIDEBAR  */}

      {open ? (
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      ) : (
        <div className={styles.mdSidebar}>
          <Sidebar />
        </div>
      )}

      {/* MAIN  */}
      <div className={styles.main}>
        <Main />
      </div>
    </main >
  )
}
