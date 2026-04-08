import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useCollection from "../hooks/useCollection"
import { useAuthContext } from "../context/AuthContext"
import { useTaskContext } from "../context/TaskContext"
import TaskItem from "../components/TaskItem"

function Tasks() {
  const [title, setTitle] = useState("")
  const { logout } = useAuth()
  const { user } = useAuthContext()
  const { tasks, setTasks } = useTaskContext()
  const { getAll, add } = useCollection("tasks")
  const navigate = useNavigate()

 useEffect(() => {
  if (!user) return

  const loadTasks = async () => {
    const data = await getAll([["uid", "==", user.uid]])
    setTasks(data)
  }

  loadTasks()
}, [user])

  const handleAdd = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await add({ title, done: false, uid: user.uid })
    const data = await getAll([["uid", "==", user.uid]])
    setTasks(data)
    setTitle("")
  }

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h1>My Tasks</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <form onSubmit={handleAdd} className="task-form">
        <input
          type="text"
          placeholder="New task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}

export default Tasks