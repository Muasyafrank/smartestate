import { useState } from "react";

export default function BookingModal({ property, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
  <div className="modal show d-block" tabIndex="-1">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content border-0 shadow-lg">
        <div className="modal-header border-0">
          <h5 className="modal-title fw-bold text-primary">
            {property.name}
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        <div className="modal-body">
          <p className="text-muted mb-3">{property.tagline}</p>

          {submitted ? (
            <SuccessMessage onClose={onClose} />
          ) : (
            <div className="row g-4">
              <div className="col-lg-6">
                <PropertyDetails property={property} />
              </div>
              <div className="col-lg-6">
                <BookingForm onSubmit={handleSubmit} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

  
  <div
    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
    style={{ zIndex: 1040 }}
    onClick={onClose}
  ></div>
</>
  );
}

function SuccessMessage({ onClose }) {
  return (
    <div className="text-center py-5">
      <i className="ri-checkbox-circle-line display-4 text-warning mb-3"></i>
      <h4 className="fw-bold text-primary">Booking Request Sent!</h4>
      <p className="text-muted">We've received your booking request and will contact you shortly.</p>
      <button className="btn btn-primary mt-3" onClick={onClose}>Close</button>
    </div>
  );
}

function PropertyDetails({ property }) {
  return (
   <div>
    <h5 className="fw-bold text-primary mb-3">Property Details</h5>
    <p className="text-muted small mb-3">{property.desc}</p>
    <h6 className="fw-semibold mb-2">Amenities</h6>
    <ul className="list-group list-group-flush mb-3">
      {property.amenities.map((amenity)=>(
        <li key={amenity} className="list-group-item px-0">
          {amenity}
        </li>
      ))}
    </ul>
    <h6 className="fw-semibold mb-1">Pricing</h6>
    <span className="badge bg-secondary fs-6">{property.price}</span>
   </div>
  );
}

function BookingForm({ onSubmit }) {
  return (
    <div>
      <h5 className="fw-bold text-primary mb-3">
        Book This Property
      </h5>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" name="fullName" id="fullName" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" name="phone" id="phone" className="form-control" required />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="checkIn" className="form-label">Check-in Date</label>
            <input type="date" name="checkIn" id="checkIn" className="form-control" required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="checkOut" className="form-label">Check-out Date</label>
            <input type="date" name="checkOut" id="checkOut" className="form-control" required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="guests" className="form-label">Guests</label>
          <select className="form-select" >
            {[1,2,3,4,5].map((n)=>(
              <option key={n}>{n} Guest{n > 1 ?'s':''}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="specialRequests" className="form-label">Special Requests</label>
          <textarea name="specialRequests" id="specialRequests" rows={3} className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Booking Request</button>
      </form>
    </div>
  );
}
