import house1 from "../assets/images/house1.png";
import house2 from "../assets/images/house2.png";
import house3 from "../assets/images/house3.png";
import house4 from "../assets/images/house4.png";
import house5 from "../assets/images/house5.png";
import house6 from "../assets/images/house6.png";
import fashion from "../assets/images/fashion.png";
import grocery from "../assets/images/grocery.png";
import medical from "../assets/images/medical.png";
import tech from "../assets/images/tech.png";
import green from "../assets/images/green.png";
export const properties = [
  {
    id: 1,
    name: "The Aurelia",
    image: house1,
    tagline: "Where modern elegance meets African Beauty.",
    desc: "A stunning 3-bedroom residence with floor-to-ceiling windows and curated interiors inspired by East African craftsmanship.",
    amenities: ["3 Bedrooms", "2 Bathrooms", "Rooftop terrace", "Parking", "High-speed WiFi", "Smart home system"],
    price: "KES 85,000 / month",
  },
  {
    id: 2,
    name: "The Rafiki Residence",
    image: house2,
    tagline: "Luxury living with a warm, welcoming spirit.",
    desc: "An inviting 2-bedroom apartment designed for families who value community and style.",
    amenities: ["2 Bedrooms", "Swimming pool access", "Gym", "24/7 security", "Balcony", "Fitted kitchen"],
    price: "KES 65,000 / month",
  },
  {
    id: 3,
    name: "Nyota Place",
    image: house3,
    tagline: "Where African charm meets star-quality comfort.",
    desc: "A chic 1-bedroom studio ideal for professionals seeking a tranquil retreat in the city.",
    amenities: ["1 Bedroom", "Studio layout", "City views", "Co-working lounge", "Concierge", "Parking"],
    price: "KES 45,000 / month",
  },
  {
    id: 4,
    name: "Eden Amani Villas",
    image: house4,
    tagline: "Peaceful, tropical living with refined style.",
    desc: "A spacious 4-bedroom villa with a private garden and outdoor entertainment area.",
    amenities: ["4 Bedrooms", "Private garden", "Outdoor BBQ area", "3 Bathrooms", "Staff quarters", "Solar power"],
    price: "KES 150,000 / month",
  },
  {
    id: 5,
    name: "Obsidian Oasis",
    image: house5,
    tagline: "Bold luxury inspired by African earth.",
    desc: "A dramatic 2-bedroom penthouse with panoramic views and premium finishes.",
    amenities: ["2 Bedrooms", "Penthouse level", "Panoramic views", "Jacuzzi", "Private lift access", "Concierge"],
    price: "KES 120,000 / month",
  },
  {
    id: 6,
    name: "Imani Ridge",
    image: house6,
    tagline: "Tranquil, secure and beautifully elevated.",
    desc: "A 3-bedroom townhouse on the ridge with generous outdoor space and modern design.",
    amenities: ["3 Bedrooms", "Townhouse style", "Ridge views", "2.5 Bathrooms", "Parking x2", "Garden"],
    price: "KES 95,000 / month",
  },
];

export const shops = [
  { id: 1, name: "ZipMart Grocery", icon: grocery, desc: "Fresh, affordable, and high-quality essentials delivered with speed and care." },
  { id: 2, name: "Duka ya Mama", icon: grocery, desc: "A curated selection of local produce and homemade goods from trusted vendors." },
  { id: 3, name: "TechCorner", icon: tech, desc: "Electronics, gadgets, and accessories for the modern resident." },
  { id: 4, name: "Green Basket", icon: green, desc: "Organic and eco-friendly products for conscious consumers." },
  { id: 5, name: "PharmaPlus", icon: medical, desc: "Health, wellness, and pharmacy needs available round the clock." },
  { id: 6, name: "Artisan Hub", icon: fashion, desc: "Handcrafted home décor and gifts celebrating African artistry." },
];

export const emergencyDirectory = [
  { name: "Fire Department", phone: "555-1234", hours: "24/7", location: "123 Oak Street" },
  { name: "Police Station", phone: "555-5678", hours: "24/7", location: "456 Maggie Avenue" },
  { name: "Estate Security", phone: "555-0987", hours: "24/7", location: "Estate Office" },
  { name: "Marine Hospital", phone: "453-3456", hours: "24/7", location: "1234 Upper Hill" },
];

export const emergencyTypes = [
  "Medical Emergency",
  "Fire Outbreak",
  "Security Threat / Suspicious Activity",
  "Power Outage / Electrical Fault",
  "Water Leakage / Shortage",
  "Gas Leakage",
  "Blocked Drainage / Sewage Issue",
  "Locked Out / Stuck in Elevator",
  "Structural Damage / Broken Facility",
  "Wild Animal / Pest Alert",
  "Other (Specify in Description)",
];

export const emergencyContacts = [
  { icon: "ri-phone-fill", label: "Call Ambulance" },
  { icon: "ri-fire-fill", label: "Report Fire" },
  { icon: "ri-police-car-line", label: "Call Police" },
  { icon: "ri-flashlight-fill", label: "Power Outage" },
  { icon: "ri-water-flash-fill", label: "Water Issue" },
];

export const adminMenu = [
  { icon: "ri-dashboard-3-line", label: "Dashboard", page: "dashboard" },
  { icon: "ri-calendar-line", label: "Bookings", page: "bookings" },
  { icon: "ri-hotel-line", label: "Properties", page: "properties" },
  { icon: "ri-user-line", label: "Users", page: "users" },
  { icon: "ri-chat-2-line", label: "Reviews", page: "reviews" },
  { icon: "ri-line-chart-line", label: "Analytics", page: "analytics" },
  { icon: "ri-settings-5-line", label: "Settings", page: "settings" },
];

export const adminStats = [
  { label: "Total Bookings", value: "128", icon: "ri-calendar-check-line" },
  { label: "Active Properties", value: "24", icon: "ri-building-2-line" },
  { label: "Registered Users", value: "342", icon: "ri-user-line" },
  { label: "Monthly Revenue", value: "KES 2.4M", icon: "ri-money-dollar-circle-line" },
];

export const recentBookings = [
  { name: "Amara Osei", property: "The Aurelia", date: "2024-03-10", status: "Confirmed" },
  { name: "Njeri Kamau", property: "Nyota Place", date: "2024-03-09", status: "Pending" },
  { name: "David Mwangi", property: "Imani Ridge", date: "2024-03-08", status: "Confirmed" },
  { name: "Fatima Hassan", property: "Obsidian Oasis", date: "2024-03-07", status: "Cancelled" },
];

export const navLinks = [
  { label: "Home", page: "home" },
  { label: "Accommodation", page: "accommodation" },
  { label: "Shopping", page: "shopping" },
  { label: "Emergency Contacts", page: "emergency" },
  { label: "Contact Us", page: "contact" },
];

export const socialIcons = [
  "ri-twitter-line",
  "ri-instagram-line",
  "ri-whatsapp-line",
  "ri-facebook-fill",
];
