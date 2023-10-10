import Header from './(header)/Header'
import Banner from './(banner)/Banner'
import Education from './(education)/Education'
import Work from './(work)/Work'
import Experience from './(experience)/Experience'
import Footer from './(footer)/Footer'

const Main = () => {
  return (
    <>
      <Header />
      <div >
        <Banner />
        <Education />
        <Work />
        <Experience />
        <Footer />
      </div>
    </>
  )
}

export default Main