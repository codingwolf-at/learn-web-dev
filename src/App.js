import { Routes, Route } from "react-router-dom";
import './App.css';
import { DisplayGrid, VideoPage } from "./components";
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<DisplayGrid />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
