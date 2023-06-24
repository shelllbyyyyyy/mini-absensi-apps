import Footer from "../layout/Footer"
import NavigationBar from "../layout/NavigationBar"
import LoginContent from "./Contents/LoginContent"

const Login = () => {
  return (
    <div classsName="Container">
      <div className="Top z-20">
        <NavigationBar />
      </div>
      <div className="Center z-10">
        <LoginContent />
      </div>
      <div className="Bottom z-0">
        <Footer />
      </div>
    </div>
  )
}

export default Login
