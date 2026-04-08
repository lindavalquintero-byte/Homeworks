import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, error, loading } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault()

  const success = await login(email, password)

  if (success) {
    navigate("/tasks")
  }
}

  return (
    <div className="auth-container">
      <h1>Login</h1>
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
          {loading ? "Loading..." : "Login"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  )
}

export default Login