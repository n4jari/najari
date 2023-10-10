import styles from './Language.module.css'
import { items } from './data'

const Language = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Languages</p>
            {items.map((item, index) => (
                <div key={index} className={styles.content}>
                    <span>{item.label}</span>
                    <span>{item.level}</span>
                </div>
            ))}
        </div>
    )
}

export default Language