import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Index from "./routes/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Index />
      </div>
    </Router>
  );
}

export default App;
