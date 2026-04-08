import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider, useAuthContext } from "./context/AuthContext"
import { TaskProvider } from "./context/TaskContext"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Tasks from "./pages/Tasks"

function PrivateRoute({ children }) {
  const { user } = useAuthContext()
  return user ? children : <Navigate to="/login" />
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <Tasks />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App