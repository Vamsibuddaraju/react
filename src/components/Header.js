import {LOGO_URL} from "../utils/constant"
import {useState} from "react"
import {Link} from "react-router-dom"

const Header = () =>{
    const [btnValue,setBtnValue]=useState("Login");
    return (
    <div className="headingContainer">
        <img className="image" src={LOGO_URL} />
        <div className="nav-list">
            <ul>
                <li><Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link></li>
                <li><Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link></li>
                <li><Link to="/grocery" style={{ textDecoration: 'none', color: 'inherit' }}>Grocery</Link></li>
                <button className="btn" onClick={()=>{
                    btnValue=== "Login"?setBtnValue("Logout"):setBtnValue("Login")
                }}>{btnValue}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;