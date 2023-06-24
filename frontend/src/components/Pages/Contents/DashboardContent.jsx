import axios from "axios"
import { useState, useEffect } from "react"
import { showTime } from "../../../utils/clock/Clock"

const DashboardContent = () => {
  const [check, setCheck] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("name") && !localStorage.getItem("nip")) {
      console.log("user belum login")
      window.location.replace("/login")
    }
  }, [])

  const absen = (params) => {
    const getData = {
      nip: localStorage.getItem("nip"),
    }
    axios({
      method: "POST",
      url: `http://localhost:3090/absensi/${params}`,
      data: getData,
    }).then((result) => {
      console.log(result)
      setCheck(!check)
    })
  }
  return (
    <div className="flex flex-col justify-center items-center mt-40 gap-2">
      <div className="card w-96 bg-base-100 shadow-xl image-full px-2.5">
        <div className="card-body">
          <div id="MyClockDisplay" class="clock" onload={showTime}></div>
          <h2 className="card-title">Tes Mini Absensi</h2>
          <p>Ini adalah contoh aplikasi</p>
        </div>
      </div>
      <div className="flex flex-col w-96 px-2.5 gap-2">
        <button
          className="btn btn-outline btn-success w-full"
          onClick={() => absen("in")}
        >
          Check In
        </button>
        <div className="flex justify-center w-auto gap-2">
          <button className="btn btn-outline btn-warning">Ijin</button>
          <button className="btn btn-outline btn-warning">Cuti</button>
          <button
            className="btn btn-outline btn-error w-56"
            onClick={() => absen("out")}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
    // <div className="Table">
    //   <div>
    //     <p>{localStorage.getItem("nama")}</p>
    //     <p>{localStorage.getItem("nip")}</p>
    //   </div>
    //   <table className="table">
    //     {/* head */}
    //     <thead>
    //       <tr>
    //         <th>No.</th>
    //         <th>NIP</th>
    //         <th>Status</th>
    //         <th>Tanggal</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {dataAbsen.map((absensi, i) => {
    //         const { users_nip, status, Check } = absensi
    //         return (
    //           <tr key={i}>
    //             <td>{i + 1}</td>
    //             <td>{users_nip}</td>
    //             <td>{status}</td>
    //             <td>{Check}</td>
    //           </tr>
    //         )
    //       })}
    //     </tbody>
    //   </table>
    //   <div>
    //     <button className="btn btn-outline btn-success">Check In</button>
    //     <button className="btn btn-outline btn-error">Check Out</button>
    //   </div>
    // </div>
  )
}

export default DashboardContent
