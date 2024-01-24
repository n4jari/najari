import styles from './Familiar.module.css'
import { items } from './data'
import { CgLoadbarAlt } from "react-icons/cg";


const Familiar = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Familiar</p>
            {items.map((item, index) => (
                <div className={styles.content} key={index}>
                    <CgLoadbarAlt fontSize={18} color='#ffc107'/>
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default Familiar