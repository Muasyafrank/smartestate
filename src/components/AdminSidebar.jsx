import { adminMenu } from "../data";

export default function AdminSidebar({activeTab,onTabChange}){
    return(
        <div className="d-flex flex-column p-3 vh-100 border-end bg-white" style={{width:"250px"}}>
            <div className="d-flex align-items-center mb-4">
                <i className="ri-home-2-line me-2"></i>
                <h5 className="mb-0 fw-bold">Admin Panel</h5>
            </div>
            <div className="nav nav-pills flex-column gap-2">
                {
                    adminMenu.map((item)=>(
                        <button key={item.page} onClick={()=>onTabChange(item.page)} className={`nav-link d-flex align-items-center gap-2 text-start ${activeTab === item.page ? "active" : "text-dark"}`}>
                            <i className={item.icon}></i>
                            {item.label}
                        </button>
                    ))
                }
            </div>
        </div>
        
    )
}