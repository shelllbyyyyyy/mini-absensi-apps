import Footer from "../layout/Footer"
import ProfileNav from "../layout/pages/ProfileNav"
import DashboardContent from "./Contents/DashboardContent"

const Dashboard = () => {
  return (
    <div className="Container">
      <div className="Top z-20">
        <ProfileNav />
      </div>
      <div className="Center z-0">
        <DashboardContent />
      </div>
      <div className="Bottom z-10">
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
