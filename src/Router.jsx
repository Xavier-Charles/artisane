import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Contest from "./pages/ContestPage";
import Ballot from "./pages/BallotPage";
import SubmitWork from "./pages/SubmitWorkPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/ballot" element={<Ballot />} />
      <Route path="/submit-work" element={<SubmitWork />} />
    </Routes>
  );
}

export default Router;
