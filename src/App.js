import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import Home from "./Home";
function App() {
  const [connecctstatus, setConnectedstatus] = useState(false);

  return (
    <div className="App">
      <Hero connecctstatus={connecctstatus} />
      <Home
        connecctstatus={connecctstatus}
        setConnectedstatus={setConnectedstatus}
      />
    </div>
  );
}

export default App;
