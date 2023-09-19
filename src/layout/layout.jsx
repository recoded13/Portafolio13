import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../Styles.css'


const Layout = () => {
    return (
        <>
        <Navbar />
        <hr />
        <main className="main-content"><Outlet /></main>
        <hr />
        <footer>Footer</footer>
        
        </>

    )
}

export default Layout;