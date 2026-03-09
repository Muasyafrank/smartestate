import { useState } from "react";
import globalStyles from "./styles/global";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import AccommodationPage from "./pages/AccommodationPage";
import ShoppingPage from "./pages/ShoppingPage";
import EmergencyPage from "./pages/EmergencyPage";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";

const pages_with_footer = ['home', 'accommodation', 'shopping', 'emergency'];
const pages_without_navbar = ['auth', 'admin'];

export default function App(){
  const [page,setPage] = useState("home");
  const showNav = !pages_without_navbar.includes(page);
  const showFooter = pages_with_footer.includes(page);

  return(
    <>
    <style>{globalStyles}</style>
    {showNav && <Navbar activePage={page} onNavigate={setPage}/>}

    {page === 'home' && <Homepage onNavigate={setPage} /> }
    {page === 'accommodation' && <AccommodationPage onNavigate={setPage} /> }
    {page === 'shopping' && <ShoppingPage onNavigate={setPage} /> }
    {page === 'emergency' && <EmergencyPage onNavigate={setPage} /> }
    {page === 'auth' && <AuthPage onNavigate={setPage} /> }
    {page === 'admin' && <AdminPage onNavigate={setPage} /> }
    {showFooter && <Footer />}

    {page === 'home' && (
      <button className="btn-outline" style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", background: "#1a3a2e", borderColor: "rgba(255,255,255,0.2)",zIndex: 999, fontSize: "0.8rem", padding: "0.6rem 1rem",}}onClick={() => setPage("admin")}><i className="ri-shield-user-line"></i>Admin Panel</button>
    )}
    </>
  )
}