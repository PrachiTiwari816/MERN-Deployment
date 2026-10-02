import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const checkBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      setMessage("Backend connection failed");
    }
  };

  return (
    <div>
      <h1>MERN Application</h1>
      <p>Frontend is running successfully.</p>

      <button onClick={checkBackend}>
        Check Backend
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;