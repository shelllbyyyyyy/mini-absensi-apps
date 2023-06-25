import Footer from "../layout/Footer"
import NavigationBar from "../layout/NavigationBar"
import Main from "../layout/Main"
import "./Pages.css"

const Home = () => {
  return (
    <div className="Container">
      <div className="Top z-20">
        <NavigationBar />
      </div>
      <div className="Center z-0">
        <Main />
      </div>
      <div className="Bottom z-10">
        <Footer />
      </div>
    </div>
  )
}

export default Home
