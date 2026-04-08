import { useState } from "react"
import { auth } from "../firebase/config"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth"

function useAuth() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const register = async (email, password) => {
    setError(null)
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  const login = async (email, password) => {
  setError(null)

  try {
    await signInWithEmailAndPassword(auth, email, password)
    return true
  } catch (err) {
    setError("Credenciales incorrectas")
    return false
  }
}

  const logout = async () => {
    await signOut(auth)
  }

  return { register, login, logout, error, loading }
}

export default useAuth