import { Routes, Route } from "react-router-dom";
import './App.css';
import { DisplayGrid, LogIn, Playlists, Roadmaps, SignUp, VideoPage } from "./pages";
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<DisplayGrid />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
