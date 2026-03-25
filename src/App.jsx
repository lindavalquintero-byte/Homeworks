import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import StackPage from "./pages/StackPage";
import QueuePage from "./pages/QueuePage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/stack"
        element={
          <PrivateRoute>
            <StackPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/queue"
        element={
          <PrivateRoute>
            <QueuePage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;