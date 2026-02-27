import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { PortfolioPage } from "./pages/PortfolioPage";
import { WatchlistPage } from "./pages/WatchlistPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
          </Routes>
        </DashboardLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
