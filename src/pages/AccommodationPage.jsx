import { useState } from "react";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import BookingModal from "../components/BookingModal.jsx";
import { properties } from "../data/index.js";

export default function AccommodationPage() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <>
      <PageHero
        title="Accommodation Services"
        subtitle="Discover a wide range of comfortable and affordable housing options tailored to your needs."
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Properties</span>
            <h2>Explore Our Residences</h2>
          </div>

          <div className="houses-grid">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={setSelectedProperty}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProperty && (
        <BookingModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      
    </>
  );
}

function PropertyCard({ property, onSelect }) {
  return (
    <div className="house-card">
      <div className="house-img">
        <img src={property.image} alt="" />
      </div>
      <div className="house-body">
        <h3>{property.name}</h3>
        <p>{property.tagline}</p>
        <button className="btn-primary" onClick={() => onSelect(property)}>
          Rent This Unit
        </button>
      </div>
    </div>
  );
}
