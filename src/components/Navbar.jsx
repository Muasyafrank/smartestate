import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar({activePage,onNavigate}){
    const [menuOpen,setMenuOpen] = useState(false);
    return(
        <>
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate("home");}}>
                    SmartEstate
                </a>
            </div>
            <ul className="nav-links-desktop">
                {
                    navLinks.map((link)=>(
                        <li key={link.page}>
                            <a href="#" className={activePage === link.page ? "active" : ""} onClick={(e) => {e.preventDefault(); onNavigate(link.page)}}>
                                {link.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <button className="menu-btn" onClick={() => setMenuOpen((prev)=>!prev)}>
                <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
        </nav>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.page}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.page);
              setMenuOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

        </>

    )
}