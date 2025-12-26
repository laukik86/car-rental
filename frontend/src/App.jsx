import { useEffect } from "react";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then(res => res.text())
      .then(data => console.log("Backend says:", data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Vite + React</h1>
      <p>Check console for backend response</p>
    </div>
  );
}

export default App;
