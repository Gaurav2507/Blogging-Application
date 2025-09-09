import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Blogging Application 📝</h1>
      <p>Frontend running with React + Vite</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default App;
