import ProfileNav from "../layout/pages/ProfileNav"
import UpdateContent from "./Contents/UpdateContent"
import Footer from "../layout/Footer"

const Update = () => {
  return (
    <div className="Container">
      <div className="Top z-20">
        <ProfileNav />
      </div>
      <div className="Center z-0">
        <UpdateContent />
      </div>
      <div className="Bottom z-10">
        <Footer />
      </div>
    </div>
  )
}

export default Update
