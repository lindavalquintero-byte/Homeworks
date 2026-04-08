import { createContext, useContext, useState } from "react"

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext)
}