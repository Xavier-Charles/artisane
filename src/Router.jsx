import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
