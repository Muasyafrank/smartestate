import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { adminMenu, adminStats, recentBookings } from "../data/index.js";

const statusColors = {
  Confirmed: "#27ae60",
  Pending: "#f39c12",
  Cancelled: "#c0392b",
};

export default function AdminPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const activeLabel = adminMenu.find((m) => m.page === activeTab)?.label || "Dashboard";

  return (
    <div className="admin-layout">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="admin-main">
        <div className="admin-header">
          <h1>{activeLabel}</h1>
          <span style={{ fontSize: "0.85rem", color: "#6b6b6b" }}>SmartBomas Admin</span>
        </div>

        {activeTab === "dashboard" ? (
          <DashboardContent />
        ) : (
          <EmptyTabContent label={activeLabel} icon={adminMenu.find((m) => m.page === activeTab)?.icon} />
        )}
      </div>

      {/* Back to site button */}
      <button
        className="btn-outline"
        style={{
          position: "fixed", bottom: "1.5rem", right: "1.5rem",
          background: "#1a3a2e", borderColor: "#c8a96e", zIndex: 999,
        }}
        onClick={() => onNavigate("home")}
      >
        <i className="ri-arrow-left-line"></i> Back to Site
      </button>
    </div>
  );
}

function DashboardContent() {
  return (
    <>
      <div className="stat-cards">
        {adminStats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-label">
              {stat.label}
              <i className={`stat-icon ${stat.icon}`}></i>
            </div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{
        background: "#ffffff", borderRadius: 12, padding: "1.5rem",
        border: "1px solid #e0d8cc",
      }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#1a3a2e", marginBottom: "1rem" }}>
          Recent Bookings
        </h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Resident</th>
                <th>Property</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking, i) => (
                <tr key={i}>
                  <td>{booking.name}</td>
                  <td>{booking.property}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span style={{
                      background: `${statusColors[booking.status]}18`,
                      color: statusColors[booking.status],
                      padding: "0.2rem 0.7rem", borderRadius: 4,
                      fontSize: "0.8rem", fontWeight: 600,
                    }}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function EmptyTabContent({ label, icon }) {
  return (
    <div style={{
      background: "#ffffff", borderRadius: 12, padding: "3rem",
      border: "1px solid #e0d8cc", textAlign: "center",
    }}>
      <div style={{ fontSize: "3rem", color: "#e0d8cc", marginBottom: "1rem" }}>
        <i className={icon}></i>
      </div>
      <p style={{ color: "#6b6b6b" }}>
        The <strong>{label}</strong> section is under development.
      </p>
    </div>
  );
}
