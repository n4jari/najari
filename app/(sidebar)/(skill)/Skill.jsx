import styles from "./Skill.module.css";
import SkillBars from "./SkillBars";
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
              <span>{item.level}</span>
            </div>

            <div className={styles.bar}>
              <SkillBars level={item.level} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
