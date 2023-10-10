import styles from './Experience.module.css'
import { items } from './data'
const Experience = () => {
    return (
        <>
            <div className={styles.title}>Experience</div>
            <div className={styles.container}>
                {[...items].reverse().map((item, index) => (
                    <div className={styles.content} key={index}>
                        <img src={item.logo} alt={item.company} width={80} height={80} />
                        <h3 className={styles.subject}>{item.title}</h3>
                        <div className={styles.compony}>{`${item.company} . ${item.type}`}</div>
                        <div className={styles.date}>{`${item.from} / ${item.to} / (${item.period})`}</div>
                        <div>{item.location}</div>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience