import { useState } from "react"

export function useName() {
  const [name, setName] = useState("")

  const handleName = (inputName) => {
    setName(inputName)
  }

  return [name, handleName]
}

export function useNIP() {
  const [NIP, setNIP] = useState("")

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP)
  }

  return [NIP, handleNIP]
}

export function usePassword() {
  const [password, setPassword] = useState("")

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword)
  }
  return [password, handlePassword]
}

export function useRetryPassword() {
  const [retryPassword, setRetryPassword] = useState("")

  const handleRetryPassword = (inputPassword) => {
    setRetryPassword(inputPassword)
  }
  return [retryPassword, handleRetryPassword]
}
