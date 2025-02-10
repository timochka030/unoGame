import HomePage from "./container/home-page";
import "./App.css";
import { useState } from "react";
import PlayPage from "./container/play-page";
function App() {
  const [open, setOpen] = useState({ homeO: true });
  return <div className="App">
    {open.homeO && <HomePage setOpen={setOpen} />}
    {open.playO && <PlayPage/>}
    </div>;
}

export default App;
