import { register } from "../../utils/Button"

const Main = () => {
  return (
    <>
      <div className="card mx-auto w-96 bg-primary text-primary-content my-20">
        <div className="card-body">
          <h2 className="card-title">Belajar CRUD</h2>
          <p>Mini Absesnsi Apps</p>
          <div className="card-actions justify-end">
            <button className="btn" onClick={() => register()}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
