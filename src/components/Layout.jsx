import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-16">{/* space for fixed navbar */}</div>
      <Outlet />
      <Footer />
    </div>
  );
}
