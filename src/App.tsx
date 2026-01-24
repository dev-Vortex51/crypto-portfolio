import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { PortfolioPage } from "./pages/PortfolioPage";
import { WatchlistPage } from "./pages/WatchlistPage";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
