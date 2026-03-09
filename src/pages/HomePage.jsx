import Footer from "../components/Footer";

const services = [
    {
        icon:"ri-home-2-line",
        title:"Accommodation",
        desc:"Experience unparalled comfort in our meticulously designed residences,featuring modern finishes and thoughtful layouts to suit every lifestyle.",
    },
    {
        icon:"ri-shopping-basket-2-fill",
        title:"Shopping ",
        desc:"From daily essentials to unique finds, SmartBomas puts a world of shopping convenience at your fingertips.",
    },
    {
        icon:"ri-radar-line",
        title:"Emergency Services",
        desc:"Your safety is our top priority. SmartBomas ensures immediate access to emergency services, providing peace of mind for every resident.",
    },

];

export default function Homepage({onNavigate}){
    return(
        <>
        <section className="hero">
            <span className="hero-tag">Smart Living in Nyeri</span>
            <h1>Smart <em>Estate</em></h1>
            <p>Where Tradition Meets Smart Living. Discover premium residences,
          seamless shopping, and round-the-clock support.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={()=>onNavigate('auth')}>Get Started</button>
            <button className="btn-primary" onClick={()=>onNavigate('accommodation')}>Explore Properties</button>
          </div>
        </section>


        <section className="section">
            <div className="section-inner">
                <div className="section-header">
                    <span className="section-eyebrow">Our Services</span>
                    <h2>Everything You Need</h2>
                    <p>Thoughtfully curated services designed to enhance your everyday comfort and convenience.</p>
                </div>
                <div className="card-grid">
                    {
                        services.map((service)=>(
                            <div className="card" key={service.title}>
                                <div className="card-icon">
                                    <i className={service.icon}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        </>
    )
}