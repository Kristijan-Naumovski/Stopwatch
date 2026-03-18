import React from "react";
import Stopwatch from "./Stopwatch";

function App() {
  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#1a1a1a"
    }}>
      <Stopwatch />
    </div>
  );
}

export default App;