import { socialIcons } from "../data";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <h3>SmartEstate</h3>
                    <p>Where Tradition Meets Smart Living</p>
                </div>
                <div className="social-icons">
                    {
                        socialIcons.map((icon)=>(
                            <div className="social-icon" key={icon}>
                                <i className={icon}></i>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p className="copyright">&copy; 2026 SmartEstate. All Rights Reserved.</p>
        </footer>
    )
}