import axios from "axios"
import { useEffect } from "react"
import { useNIP, usePassword } from "../../../utils/MyHook"

const LoginContent = () => {
  const [NIP, handleNIP] = useNIP()
  const [password, handlePassword] = usePassword()

  useEffect(() => {
    if (localStorage.getItem("name") && localStorage.getItem("nip")) {
      window.location.replace("/dashboard")
    }
  }, [])

  const logInNow = () => {
    const datas = {
      nip: NIP,
      password: password,
    }

    axios({
      method: "POST",
      url: "http://localhost:3090/users/login",
      data: datas,
    }).then((result) => {
      localStorage.setItem("nip", result.data.users.nip)
      localStorage.setItem("name", result.data.users.name)
      window.location.replace("/dashboard")
    })
  }
  return (
    <div className="Login">
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
          Shelby
        </a>
        <div class="w-3/4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="nip"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Please input your NIP
                </label>
                <input
                  type="numbers"
                  name="nip"
                  id="nip"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="at least have 4 numbers"
                  required=""
                  onChange={(event) => handleNIP(event.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
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
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => logInNow()}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginContent
