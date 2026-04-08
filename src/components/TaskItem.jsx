import { useState } from "react"
import useCollection from "../hooks/useCollection"
import { useTaskContext } from "../context/TaskContext"
import { useAuthContext } from "../context/AuthContext"

function TaskItem({ task }) {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(task.title)
  const { update, remove } = useCollection("tasks")
  const { tasks, setTasks } = useTaskContext()
  const { user } = useAuthContext()

  const refreshTasks = (updatedTasks) => {
    setTasks(updatedTasks)
  }

  const handleToggleDone = async () => {
    await update(task.id, { done: !task.done })
    const updated = tasks.map((t) =>
      t.id === task.id ? { ...t, done: !t.done } : t
    )
    refreshTasks(updated)
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    await update(task.id, { title: newTitle })
    const updated = tasks.map((t) =>
      t.id === task.id ? { ...t, title: newTitle } : t
    )
    refreshTasks(updated)
    setEditing(false)
  }

  const handleDelete = async () => {
    await remove(task.id)
    const updated = tasks.filter((t) => t.id !== task.id)
    refreshTasks(updated)
  }

  return (
    <li className={`task-item ${task.done ? "done" : ""}`}>
      {editing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <span onClick={handleToggleDone}>{task.title}</span>
          <div className="task-buttons">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  )
}

export default TaskItem