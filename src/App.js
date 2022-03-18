import { Routes, Route } from "react-router-dom";
import './App.css';
import { DisplayGrid } from "./components";
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<DisplayGrid />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
