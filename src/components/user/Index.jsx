import UserDashboard from "./Dashboard";
import DashboardNavbar from "./Nav";
import Sidebar from "./Sidebar";
import { Outlet, NavLink } from "react-router-dom";
const Dashboard = () => {
    return (
        <div>
            <div class="dashboard-wrapper">
                <Sidebar/>
                <div id="content">
            <div class="overlay">

                <DashboardNavbar/>
                <Outlet />
            </div>
            
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;