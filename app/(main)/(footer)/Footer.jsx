import Link from 'next/link'
import styles from './Footer.module.css'
import { SiMinutemailer } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.email}>
                <SiMinutemailer />
                <Link href="mailto:n4jari@gmail.com">n4jari@gmail.com</Link>
            </div>

            <p>Copyright {new Date().getFullYear()} | &copy;najari</p>
        </footer>
    )
}

export default Footer