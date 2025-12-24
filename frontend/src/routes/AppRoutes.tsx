import LoginScreen from "@/pages/auth/LoginScreen";
import RegisterScreen from "@/pages/auth/RegisterScreen";
import DashboardScreen from "@/pages/dashboard/Dashboard";
import { HomeScreen } from "@/pages/Home/HomeScreen";
import Unauthorized from "@/pages/unauthorized/Unauthorized";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/home" element={<HomeScreen />} />

        {/* Protected routes */}
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route> */}

        {/* Fallback */}
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
