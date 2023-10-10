'use client'
import { useContext } from 'react'
import styles from './Header.module.css'
import { AppContext } from '@/context/AppContext'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const { toggle } = useContext(AppContext)
    return (
        <header className={styles.container}>
            <div className={styles.btn} onClick={toggle}>
                <AiOutlineMenu />
            </div>
        </header>
    )
}

export default Header