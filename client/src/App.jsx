import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  if (!loggedIn) {
    return (
      <>
        <Register />
        <Login onLogin={() => setLoggedIn(true)} />
      </>
    );
  }

  return <Dashboard />;
}

export default App;
