import { useEffect, useState } from 'react'
import styles from './Work.module.css'
import { selectItems, workItems } from './data'
const Work = () => {
    const [items, setItems] = useState(workItems)



    const filter = (e) => {
        if (e !== "All") {
            const filteredItems = workItems.filter(item => item.level === e)
            setItems(filteredItems)
        } else {
            setItems(workItems)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>Works</span>
                <select onChange={(e) => filter(e.target.value)}>
                    {selectItems.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className={styles.content}>
                {[...items].reverse().map((item, index) => (
                    <div className={styles.items} key={index}>
                        <div className={styles.label}>
                            <span>{item.label}</span>
                            <span>{item.level}</span>
                        </div>
                        <img src={item.img} alt={item.label} />
                        <div className={styles.description}>
                            <b>{item.description}</b>
                        </div>
                        <div className={styles.btn}>
                            <a href={item.link} target="_blank">
                                REVIEW NOW
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work