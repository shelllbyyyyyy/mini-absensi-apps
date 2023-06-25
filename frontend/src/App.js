import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Pages/Home"
import Register from "./components/Pages/Register"
import Dashboard from "./components/Pages/Dashboard"
import Login from "./components/Pages/Login"
import Update from "./components/Pages/Update"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home title="HOMEPAGE" />} />
          <Route path="/register" element={<Register title="Register" />} />
          <Route path="/login" element={<Login title="LOGIN PAGE" />} />
          <Route
            path="/dashboard"
            element={<Dashboard title="Welcome Users" />}
          />
          <Route path="/update" element={<Update title="Welcome Users" />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
