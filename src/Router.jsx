import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Contest from "./pages/ContestPage";
import Cart from "./pages/CartPage";
import SubmitWork from "./pages/SubmitWorkPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/submit-work" element={<SubmitWork />} />
    </Routes>
  );
}

export default Router;
