import Link from 'next/link'
import styles from './CV.module.css'
import { MdOutlineFileDownload } from 'react-icons/md'

const CV = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                <span>DOWNLOAD CV</span>
                <MdOutlineFileDownload />
            </p>

            <p className={styles.links}>
                <Link href="/FA-Najari-CV.pdf">FA</Link>
                <Link href="/ENG-Najari-CV.pdf">ENG</Link>
            </p>
        </div>
    )
}

export default CV