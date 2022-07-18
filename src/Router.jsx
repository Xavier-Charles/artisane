import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Contest from "./pages/ContestPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Contest />} />
    </Routes>
  );
}

export default Router;
