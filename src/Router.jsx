import { Routes, Route } from "react-router-dom";
import Contest from "./pages/ContestPage";
import Ballot from "./pages/BallotPage";
import SubmitWork from "./pages/SubmitWorkPage";
import SubscribePage from "./pages/SubscribePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Contest />} />
      <Route path="/ballot" element={<Ballot />} />
      <Route path="/submit-work" element={<SubmitWork />} />
      <Route path="/subscribe" element={<SubscribePage />} />
    </Routes>
  );
}

export default Router;
