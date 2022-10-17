import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Contest from "./pages/ContestPage";
import Ballot from "./pages/BallotPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import SubscribePage from "./pages/SubscribePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/ballot" element={<Ballot />} />
        <Route path="/connect-wallet" element={<ConnectWalletPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
