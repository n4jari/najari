import styles from './Education.module.css'
import { items } from './data'

const Education = () => {
    return (
        <div className={styles.container}>
            {items.map((item, index) => (
                <div key={index} className={styles.content}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    )
}

export default Education