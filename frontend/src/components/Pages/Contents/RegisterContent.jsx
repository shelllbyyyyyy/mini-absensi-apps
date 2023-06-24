import axios from "axios"
import {
  useNIP,
  useRetryPassword,
  useName,
  usePassword,
} from "../../../utils/MyHook"
import { useEffect, useState } from "react"

const RegisterContent = () => {
  const [NIP, handleNIP] = useNIP()
  const [name, handleName] = useName()
  const [password, handlePassword] = usePassword()
  const [retryPassword, handleRetryPassword] = useRetryPassword()
  const [passwordNotMatch, setPasswordNotMatch] = useState(false)

  useEffect(() => {
    const debounced = () =>
      setTimeout(() => {
        if (retryPassword !== password) return setPasswordNotMatch(true)
        return setPasswordNotMatch(false)
      }, 500)
    if (retryPassword && password) {
      debounced()
    }
  }, [retryPassword, password])

  const registerNow = () => {
    const datas = {
      nip: NIP,
      name: name,
      password: password,
    }

    axios({
      method: "POST",
      url: "http://localhost:3090/users",
      data: datas,
    }).then((result) => {
      console.log(result.data)
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
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="nip"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Create NIP
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
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  What's your name ?
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type here"
                  required=""
                  onChange={(event) => handleName(event.target.value)}
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
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => handleRetryPassword(event.target.value)}
                  required=""
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-orange-500 active:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-orange-500 dark:active:bg-orange-700"
                onClick={() => registerNow()}
                disabled={passwordNotMatch}
              >
                Sign Up
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterContent
