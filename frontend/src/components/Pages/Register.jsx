import Footer from "../layout/Footer"
import NavigationBar from "../layout/NavigationBar"
import RegisterContent from "./Contents/RegisterContent"

const Register = () => {
  return (
    <div classsName="Container">
      <div className="Top z-20">
        <NavigationBar />
      </div>
      <div className="Center z-10">
        <RegisterContent />
      </div>
      <div className="Bottom z-0">
        <Footer />
      </div>
    </div>
  )
}

export default Register
