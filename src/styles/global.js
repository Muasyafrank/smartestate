const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #f5f0e8;
    color: #1a1a1a;
    overflow-x: hidden;
  }

  /* ── NAVBAR ── */
  .navbar {
    position: sticky; top: 0; z-index: 100;
    background: #1a3a2e;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem;
    height: 64px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.18);
  }
  .nav-logo a {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem; font-weight: 700;
    color: #c8a96e; text-decoration: none;
    letter-spacing: 0.04em;
  }
  .nav-links-desktop {
    display: flex; gap: 2rem; list-style: none;
  }
  .nav-links-desktop a {
    color: rgba(255,255,255,0.82); text-decoration: none;
    font-size: 0.9rem; font-weight: 500;
    transition: color 0.2s;
    letter-spacing: 0.03em;
  }
  .nav-links-desktop a:hover,
  .nav-links-desktop a.active { color: #c8a96e; }
  .menu-btn {
    display: none; background: none; border: none;
    color: #c8a96e; font-size: 1.6rem; cursor: pointer;
  }
  .mobile-menu {
    position: fixed; top: 64px; left: 0; right: 0;
    background: #1a3a2e; z-index: 99;
    padding: 1rem 2rem 1.5rem;
    display: flex; flex-direction: column; gap: 0.8rem;
    transform: translateY(-110%); transition: transform 0.3s ease;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
  .mobile-menu.open { transform: translateY(0); }
  .mobile-menu a {
    color: rgba(255,255,255,0.85); text-decoration: none;
    font-size: 1rem; padding: 0.4rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  /* ── HERO/BANNER ── */
  .hero {
    min-height: 92vh;
    background: linear-gradient(135deg, #1a3a2e 0%, #0d2218 60%, #1a3a2e 100%);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 4rem 2rem;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,169,110,0.10) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-tag {
    font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: #c8a96e; font-weight: 600;
    border: 1px solid rgba(200,169,110,0.4);
    padding: 0.3rem 1rem; border-radius: 100px;
    margin-bottom: 1.5rem; display: inline-block;
  }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 8vw, 6rem);
    color: #ffffff; line-height: 1.05;
    margin-bottom: 1rem;
  }
  .hero h1 em { color: #c8a96e; font-style: italic; }
  .hero p {
    font-size: 1.1rem; color: rgba(255,255,255,0.7);
    max-width: 480px; line-height: 1.7; margin-bottom: 2.5rem;
  }
  .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }

  /* ── BUTTONS ── */
  .btn-primary {
    background: #c8a96e; color: #1a3a2e;
    padding: 0.85rem 2rem; border: none; border-radius: 6px;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.95rem;
    cursor: pointer; transition: background 0.2s, transform 0.15s;
    text-decoration: none; display: inline-block;
  }
  .btn-primary:hover { background: #e8c98e; transform: translateY(-1px); }
  .btn-outline {
    background: transparent; color: #ffffff;
    padding: 0.85rem 2rem; border: 1.5px solid rgba(255,255,255,0.35);
    border-radius: 6px; font-family: 'DM Sans', sans-serif;
    font-weight: 500; font-size: 0.95rem; cursor: pointer;
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
    text-decoration: none; display: inline-block;
  }
  .btn-outline:hover { border-color: #c8a96e; color: #c8a96e; transform: translateY(-1px); }

  /* ── SECTION ── */
  .section { padding: 5rem 2rem; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-header { text-align: center; margin-bottom: 3.5rem; justify-content: center; display: flex; flex-direction: column; align-items: center; gap: 0.8rem; }
  .section-eyebrow {
    font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: #c8a96e; font-weight: 600; margin-bottom: 0.8rem; display: block;
  }
  .section-header h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 2.8rem); color: #1a3a2e;
    margin-bottom: 0.8rem;
  }
  .section-header p { color: #6b6b6b; max-width: 540px; margin: 0 auto; line-height: 1.7; }

  /* ── SERVICE CARDS ── */
  .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  .card {
    background: #ffffff; border-radius: 12px;
    padding: 2rem; border: 1px solid #e0d8cc;
    transition: box-shadow 0.25s, transform 0.25s;
    position: relative; overflow: hidden;
  }
  .card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 3px; background: #c8a96e;
    transform: scaleX(0); transition: transform 0.25s;
    transform-origin: left;
  }
  .card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-4px); }
  .card:hover::after { transform: scaleX(1); }
  .card-icon {
    width: 52px; height: 52px; border-radius: 12px;
    background: rgba(200,169,110,0.12);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; color: #c8a96e;
    margin-bottom: 1.2rem;
  }
  .card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; color: #1a3a2e;
    margin-bottom: 0.6rem;
  }
  .card p { color: #6b6b6b; font-size: 0.9rem; line-height: 1.65; }

  /* ── PAGE HERO ── */
  .page-hero {
    min-height: 320px;
    background: linear-gradient(135deg, #1a3a2e 0%, #0d2218 100%);
    display: flex; align-items: flex-end;
    padding: 3rem 2rem; position: relative; overflow: hidden;
  }
  .page-hero-inner { max-width: 1100px; margin: 0 auto; width: 100%; position: relative; z-index: 1; }
  .page-hero h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.5rem); color: #ffffff;
    margin-bottom: 0.6rem;
  }
  .page-hero p { color: rgba(255,255,255,0.7); max-width: 520px; line-height: 1.7; }

  /* ── HOUSES GRID ── */
  .houses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .house-card {
    background: #ffffff; border-radius: 12px;
    overflow: hidden; border: 1px solid #e0d8cc;
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .house-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-4px); }
  .house-img img {
    width: 100%; height: 200px; object-fit: cover;
    // background: linear-gradient(135deg, #2a4a3e 0%, #1a3a2e 100%);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.3); font-size: 2.5rem;
  }
  .house-body { padding: 1.4rem; }
  .house-body h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem; color: #1a3a2e; margin-bottom: 0.4rem;
  }
  .house-body p { color: #6b6b6b; font-size: 0.88rem; margin-bottom: 1rem; line-height: 1.6; }

  /* ── MODAL ── */
  

  /* ── FORMS ── */
  .form-group { margin-bottom: 1rem; }
  .form-group label {
    display: block; font-size: 0.85rem; font-weight: 500;
    color: #1a1a1a; margin-bottom: 0.4rem;
  }
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%; padding: 0.7rem 1rem;
    border: 1.5px solid #e0d8cc; border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
    background: #f5f0e8; color: #1a1a1a;
    transition: border-color 0.2s;
    outline: none;
  }
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus { border-color: #c8a96e; background: #ffffff; }
  .form-group textarea { resize: vertical; min-height: 100px; }
  .double-input { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

  /* ── EMERGENCY ── */
  .contacts-row { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
  .contact-btn {
    display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
    background: #ffffff; border: 1.5px solid #e0d8cc;
    border-radius: 12px; padding: 1.2rem 1.5rem;
    cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s;
    font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: #1a1a1a;
    flex: 1 1 120px;
  }
  .contact-btn i { font-size: 1.8rem; color: #c8a96e; }
  .contact-btn:hover { border-color: #c8a96e; box-shadow: 0 4px 16px rgba(200,169,110,0.15); }
  .notification-bar {
    background: rgba(200,169,110,0.12); border: 1px solid rgba(200,169,110,0.35);
    border-radius: 10px; padding: 1rem 1.2rem;
    display: flex; justify-content: space-between; align-items: flex-start;
    margin-bottom: 2rem;
  }
  .notification-bar h4 { font-size: 0.95rem; color: #1a3a2e; margin-bottom: 0.2rem; }
  .notification-bar p { font-size: 0.85rem; color: #6b6b6b; }
  .notif-close {
    background: none; border: none; cursor: pointer;
    color: #6b6b6b; font-size: 1rem; flex-shrink: 0; padding: 0 0 0 1rem;
  }
  .table-wrap { overflow-x: auto; margin-bottom: 2.5rem; }
  table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
  thead { background: #1a3a2e; }
  th {
    color: #c8a96e; font-weight: 600;
    padding: 0.85rem 1rem; text-align: left; font-size: 0.82rem;
    letter-spacing: 0.04em; text-transform: uppercase;
  }
  td { padding: 0.85rem 1rem; border-bottom: 1px solid #e0d8cc; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: rgba(200,169,110,0.04); }
  .emergency-layout {
    display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;
  }
  .section-subtitle {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem; color: #1a3a2e; margin-bottom: 1rem;
  }

  /* ── SHOP ── */
  .shop-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
  .shop-row {
    background: #ffffff; border-radius: 12px;
    display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e0d8cc;
    transition: box-shadow 0.25s;
  }
  .shop-row:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
  .shop-img {
    width: 100%; height: 200px; flex-shrink: 0;
    background: linear-gradient(135deg, #2a4a3e, #1a3a2e);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.25); font-size: 2.5rem;
  }
  .shop-img img { width: 100%; height: 100%; object-fit: cover; }
  .shop-content { padding: 1.5rem; display: flex; flex-direction: column; justify-content: center; }
  .shop-content h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem; color: #1a3a2e; margin-bottom: 0.5rem;
  }
  .shop-content p { color: #6b6b6b; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem; }
  .search-bar {
    display: flex; max-width: 520px;
    background: rgba(255,255,255,0.12); border-radius: 8px; overflow: hidden;
    border: 1px solid rgba(255,255,255,0.2); margin-top: 2rem;
  }
  .search-bar input {
    flex: 1; padding: 0.8rem 1.2rem; background: none; border: none;
    color: #ffffff; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; outline: none;
  }
  .search-bar input::placeholder { color: rgba(255,255,255,0.5); }
  .search-bar button {
    background: #c8a96e; border: none; padding: 0 1.2rem;
    color: #1a3a2e; cursor: pointer; font-size: 1.1rem; transition: background 0.2s;
  }
  .search-bar button:hover { background: #e8c98e; }

  /* ── ADMIN ── */
  .admin-layout { display: flex; min-height: 100vh; }
  .sidebar {
    width: 240px; background: #1a3a2e;
    display: flex; flex-direction: column;
    position: fixed; top: 0; left: 0; bottom: 0; z-index: 50; padding: 1.5rem 0;
  }
  .sidebar-brand {
    display: flex; align-items: center; gap: 0.7rem;
    padding: 0 1.5rem 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 1rem;
  }
  .sidebar-brand i { color: #c8a96e; font-size: 1.4rem; }
  .sidebar-brand h2 { font-family: 'Playfair Display', serif; color: #ffffff; font-size: 1.1rem; }
  .sidebar-link {
    display: flex; align-items: center; gap: 0.75rem;
    padding: 0.75rem 1.5rem; color: rgba(255,255,255,0.65); text-decoration: none;
    font-size: 0.9rem; transition: color 0.2s, background 0.2s;
    cursor: pointer; border: none; background: none; width: 100%;
    font-family: 'DM Sans', sans-serif;
  }
  .sidebar-link i { font-size: 1.1rem; }
  .sidebar-link:hover { background: rgba(255,255,255,0.06); color: #ffffff; }
  .sidebar-link.active { background: rgba(200,169,110,0.12); color: #c8a96e; }
  .admin-main { margin-left: 240px; flex: 1; padding: 2rem; background: #f5f0e8; min-height: 100vh; }
  .admin-header {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;
  }
  .admin-header h1 { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #1a3a2e; }
  .stat-cards {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.2rem; margin-bottom: 2rem;
  }
  .stat-card { background: #ffffff; border-radius: 12px; padding: 1.5rem; border: 1px solid #e0d8cc; }
  .stat-card .stat-label {
    font-size: 0.8rem; color: #6b6b6b; text-transform: uppercase;
    letter-spacing: 0.06em; margin-bottom: 0.5rem;
  }
  .stat-card .stat-value { font-family: 'Playfair Display', serif; font-size: 2rem; color: #1a3a2e; }
  .stat-card .stat-icon { font-size: 1.4rem; color: #c8a96e; float: right; margin-top: -0.2rem; }

  /* ── AUTH ── */
  .auth-page {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #1a3a2e 0%, #0d2218 100%); padding: 2rem;
  }
  .auth-card {
    background: #ffffff; border-radius: 16px;
    padding: 2.5rem; width: 100%; max-width: 440px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.25);
  }
  .auth-card h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem; color: #1a3a2e; margin-bottom: 0.3rem;
  }
  .auth-card .auth-sub { color: #6b6b6b; font-size: 0.9rem; margin-bottom: 2rem; }
  .auth-toggle {
    text-align: center; margin-top: 1.5rem; font-size: 0.88rem; color: #6b6b6b;
  }
  .auth-toggle a {
    color: #c8a96e; font-weight: 600; cursor: pointer;
    text-decoration: none; margin-left: 0.3rem;
  }

  /* ── FOOTER ── */
  .footer { background: #1a3a2e; color: rgba(255,255,255,0.75); padding: 3rem 2rem 1.5rem; }
  .footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: flex; flex-wrap: wrap; gap: 2rem;
    justify-content: space-between; align-items: flex-start;
    padding-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .footer-brand h3 {
    font-family: 'Playfair Display', serif; color: #c8a96e;
    font-size: 1.3rem; margin-bottom: 0.4rem;
  }
  .footer-brand p { font-size: 0.85rem; color: rgba(255,255,255,0.5); }
  .social-icons { display: flex; gap: 0.8rem; }
  .social-icon {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.2);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.7); cursor: pointer;
    transition: border-color 0.2s, color 0.2s; font-size: 1rem;
  }
  .social-icon:hover { border-color: #c8a96e; color: #c8a96e; }
  .copyright {
    max-width: 1100px; margin: 1.2rem auto 0;
    text-align: center; font-size: 0.8rem; color: rgba(255,255,255,0.35);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .nav-links-desktop { display: none; }
    .menu-btn { display: block; }
    .modal-grid { grid-template-columns: 1fr; }
    .emergency-layout { grid-template-columns: 1fr; }
    .shop-row { flex-direction: column; }
    .shop-img { width: 100%; height: 160px; }
    .sidebar { width: 200px; }
    .admin-main { margin-left: 200px; }
    .double-input { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .admin-main { margin-left: 0; }
  }
`;

export default globalStyles;
