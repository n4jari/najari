import styles from './Knowledge.module.css'
import { items } from './data'
import { BsCheck } from 'react-icons/bs'
import { PiDotDuotone } from "react-icons/pi";

const Knowledge = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Knowledge</p>
            {items.map((item, index) => (
                <div className={styles.content} key={index}>
                    <PiDotDuotone fontSize={18} color='#ffc107'/>
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default Knowledge