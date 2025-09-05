import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import MasterLayout from "./components/layouts/MasterLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
