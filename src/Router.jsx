import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Contest from "./pages/ContestPage";
import Cart from "./pages/CartPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
