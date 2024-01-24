import styles from "./Skill.module.css";
import { items } from "./data";

const Skill = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Skill</p>
      {items.map((item, index) => {
        return (
          <div className={styles.content} key={index}>
            <div className={styles.subject}>
              <span>{item.skill}</span>
              <span>{item.percent}</span>
            </div>

            <div className={styles.bar}>
              <div style={{ width: item.percent }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
