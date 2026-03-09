import { useState } from "react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { emergencyDirectory,emergencyTypes,emergencyContacts } from "../data";

export default function EmergencyPage() {
  const [showNotif, setShowNotif] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        title="Emergency Contacts"
        subtitle="In case of an emergency please use the following contacts. These resources are available 24/7 to assist you."
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Help Center</span>
            <h2>Emergency Contacts & Help Center</h2>
            <p>Immediate access to help and support in emergencies.</p>
          </div>

          {/* Quick contact buttons */}
          <div className="contacts-row">
            {emergencyContacts.map((contact) => (
              <button className="contact-btn" key={contact.label}>
                <i className={contact.icon}></i>
                <span>{contact.label}</span>
              </button>
            ))}
          </div>

          {/* Dismissible notification */}
          {showNotif && (
            <div className="notification-bar">
              <div>
                <h4>Planned Water Interruption: 3PM – 6PM today.</h4>
                <p>Please ensure you have sufficient water for this period.</p>
              </div>
              <button className="notif-close" onClick={() => setShowNotif(false)}>
                <i className="ri-close-large-line"></i>
              </button>
            </div>
          )}

          <div className="emergency-layout">
            <EmergencyDirectory />
            <EmergencyReportForm submitted={submitted} onSubmit={() => setSubmitted(true)} onReset={() => setSubmitted(false)} />
          </div>
        </div>
      </section>

      
    </>
  );
}

function EmergencyDirectory() {
  return (
    <div>
      <h3 className="section-subtitle">Emergency Directory</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Phone Number</th>
              <th>Hours</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {emergencyDirectory.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>
                  <a
                    href={`tel:${row.phone}`}
                    style={{ color: "#c8a96e", textDecoration: "none", fontWeight: 500 }}
                  >
                    {row.phone}
                  </a>
                </td>
                <td>
                  <span style={{
                    background: "rgba(200,169,110,0.12)", color: "#1a3a2e",
                    padding: "0.2rem 0.6rem", borderRadius: "4px",
                    fontSize: "0.8rem", fontWeight: 600,
                  }}>
                    {row.hours}
                  </span>
                </td>
                <td>{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmergencyReportForm({ submitted, onSubmit, onReset }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "3rem", color: "#c8a96e", marginBottom: "0.8rem" }}>
          <i className="ri-checkbox-circle-line"></i>
        </div>
        <p style={{ color: "#1a3a2e", fontWeight: 600 }}>
          Emergency report submitted. Help is on the way.
        </p>
        <button className="btn-primary" style={{ marginTop: "1rem" }} onClick={onReset}>
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="section-subtitle">Emergency Report Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" required />
        </div>
        <div className="form-group">
          <label>Type of Emergency</label>
          <select defaultValue="">
            <option value="" disabled>Select emergency type</option>
            {emergencyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Location / Apartment</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Describe the emergency in detail" />
        </div>
        <button
          className="btn-primary"
          type="submit"
          style={{ width: "100%", background: "#c0392b", color: "#fff" }}
        >
          <i className="ri-alarm-warning-line" style={{ marginRight: "0.5rem" }}></i>
          Submit Emergency Request
        </button>
      </form>
    </div>
  );
}