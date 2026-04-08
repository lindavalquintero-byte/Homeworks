import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register, error, loading } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(email, password)
    if (!error) {
      navigate("/tasks")
    }
  }

  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">
          {loading ? "Loading..." : "Register"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Register