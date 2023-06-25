import axios from "axios"
import {
  useNewPassword,
  useRetryPassword,
  useName,
  usePassword,
} from "../../../utils/MyHook"
import { useEffect, useState } from "react"

const UpdateContent = () => {
  const [name, handleName] = useName()
  const [password, handlePassword] = usePassword()
  const [newPassword, handleNewPassword] = useNewPassword()
  const [retryPassword, handleRetryPassword] = useRetryPassword()
  const [passwordNotMatch, setPasswordNotMatch] = useState(false)

  useEffect(() => {
    const debounced = () =>
      setTimeout(() => {
        if (retryPassword !== newPassword) return setPasswordNotMatch(true)
        return setPasswordNotMatch(false)
      }, 500)
    if (retryPassword && newPassword) {
      debounced()
    }
    if (!localStorage.getItem("name") && !localStorage.getItem("nip")) {
      window.location.replace("/login")
    }
  }, [retryPassword, password])

  const saveChanges = () => {
    const datas = {
      nip: localStorage.getItem("nip"),
      name: name,
      password: password,
      newPassword: newPassword,
    }

    axios({
      method: "PUT",
      url: "http://localhost:3090/users",
      data: datas,
    }).then((result) => {
      console.log(result.data)
      localStorage.clear()
      alert("Profile updated, please relog...!")
    })
  }

  return (
    <div className="Register">
      <div class="flex flex-col items-center justify-center ">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Shelby Absensi Apps
        </a>
        <div class="w-3/4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Update Profile
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Please input your new name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={localStorage.getItem("name")}
                  required=""
                  onChange={(event) => handleName(event.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(event) => handlePassword(event.target.value)}
                />
              </div>
              <div>
                <label
                  for="new-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="new-password"
                  id="new-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(event) => handleNewPassword(event.target.value)}
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  onChange={(event) => handleRetryPassword(event.target.value)}
                  required=""
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-orange-500 active:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-orange-500 dark:active:bg-orange-700"
                onClick={() => saveChanges()}
                disabled={passwordNotMatch}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateContent
