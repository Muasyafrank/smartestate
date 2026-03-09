import { useState } from "react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { shops } from "../data";

export default function ShoppingPage(){
    const[query,setQuery] = useState("");

    const filtered = shops.filter((shop)=> 
    shop.name.toLowerCase().includes(query.toLowerCase()) ||
    shop.desc.toLowerCase().includes(query.toLowerCase())
);

return(
    <>
    <PageHero title="Shop Local.Live Better." subtitle="Everything you need, right within the estate">
        <div className="search-bar">
            <input type="text" placeholder="What are you looking for today?" value={query} onChange={(e)=>setQuery(e.target.value)} />
            <button>
                <i className="ri-search-line"></i>
            </button>
        </div>
    </PageHero>

    <section className="section">
        <div className="section-inner">
            {filtered.length === 0 ? (
                <p style={{ color: "#6b6b6b", textAlign: "center", padding: "2rem" }}>
              No shops match your search.
            </p>
            ):(
               <div className="shop-list">
              {filtered.map((shop) => (
                <ShopRow key={shop.id} shop={shop} />
              ))}
            </div> 
            )} 
        </div>
    </section>
    <Footer/>
    </>
)
}

function ShopRow({shop}){
    return(
        <div className="shop-row">
            <div className="shop-img">
                <img src={shop.icon} alt={shop.name} />
            </div>
            <div className="shop-content">
                <h3>{shop.name}</h3>
                <p>{shop.desc}</p>
                 <button className="btn-primary" style={{ alignSelf: "flex-start" }}>Shop Now <i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    )
}