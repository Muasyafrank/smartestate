export default function PageHero({title,subtitle,children}){
    return(
        <div className="page-hero">
            <div className="page-hero-inner">
                <h2>{title}</h2>
                {subtitle && <p>{subtitle}</p> }
                {children}
            </div>
        </div>
    )
}