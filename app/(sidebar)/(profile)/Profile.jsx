import Image from 'next/image'
import styles from './Profile.module.css'
import { useContext } from 'react'
import { AppContext } from '@/context/AppContext'
import { AiOutlineMore } from 'react-icons/ai'

const Profile = () => {
    const { toggle, open } = useContext(AppContext)

    return (
        <div className={styles.container}>
            {!open && (
                <div onClick={toggle} className={styles.closeBtn}>
                    <AiOutlineMore />
                </div>
            )}
            <Image
                src="./profile.jpg"
                alt="amireza najari"
                className={styles.img}
                width={100}
                height={100}
            />
            <h4 className={styles.fullname}>AmirReza Najari</h4>
            <p className={styles.description}>Front-end Developer</p>
        </div>
    )
}

export default Profile
