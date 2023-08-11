import Home from "./pages/Home";
import CatMovies from "./pages/CatMovies";
import { routhPath } from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhPath.home} element={<Home />} />
        <Route path={routhPath.categories} element={<CatMovies />} />
        <Route path={routhPath.invalid} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
