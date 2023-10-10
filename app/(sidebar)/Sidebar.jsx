import CV from './(cv)/CV'
import Info from './(info)/Info'
import Knowledge from './(knowledge)/Knowledge'
import Language from './(language)/Language'
import Profile from './(profile)/Profile'
import Skill from './(skill)/Skill'
import Social from './(social)/Social'
import styles from './Sidebar.module.css'
const Sidebar = () => {
  return (
    <div>
      <Profile />
      <div className={styles.container}>
        <Info />
        <Language />
        <Skill />
        <Knowledge />
        <CV />
      </div>
      <Social />
    </div>
  )
}

export default Sidebar