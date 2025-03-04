
import { Route, Routes, Navigate } from "react-router-dom";
import LayoutCharity from "./pages/LayoutCharity";
import HomeCharity from "./pages/HomeCharity";
import RequestsCharity from "./pages/RequestsCharity";
import HistoryCharity from "./pages/HistoryCharity";
import SettingsCharity from "./pages/SettingsCharity";

function App() {
  return (
    <div>
      <Routes>
        {/* ✅ إعادة التوجيه عند فتح التطبيق */}
        <Route path="/" element={<Navigate to="/dashboardCharity" replace />} />

        {/* Dashboard Charity Layout */}
        <Route path="/dashboardCharity" element={<LayoutCharity />}>
          <Route index element={<HomeCharity />} />
          <Route path="requests" element={<RequestsCharity />} />
          <Route path="history" element={<HistoryCharity />} />
          <Route path="settings" element={<SettingsCharity />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
