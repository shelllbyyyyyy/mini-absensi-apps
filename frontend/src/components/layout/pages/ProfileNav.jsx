import { dashboard } from "../../../utils/Button"
import ProfileSide from "./ProfileSide"

const ProfileNav = () => {
  return (
    <div className="navbar fixed top-0 bg-base-100">
      <div className="flex-none">
        <ProfileSide />
      </div>
      <div className="flex-1">
        <p
          className="btn btn-ghost normal-case text-xl"
          onClick={() => dashboard()}
        >
          Halo, {localStorage.getItem("name")}
        </p>
      </div>
      <div className="flex-none mr-5">
        <div className="avatar">
          <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileNav
