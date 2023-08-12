import Home from "./pages/Home";
import CatMovies from "./pages/CatMovies";
import { routhPath } from "./constants/routes";
import Header from "./components/common/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <Header />
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          path={routhPath.home}
          element={<Home setProgress={setProgress} />}
        />
        <Route
          path={routhPath.categories}
          element={<CatMovies setProgress={setProgress} />}
        />
        <Route
          path={routhPath.invalid}
          element={<Home setProgress={setProgress} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
