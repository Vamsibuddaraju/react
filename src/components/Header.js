import {LOGO_URL} from "./../constants/constant"
import {useState} from "react"
import {Link} from "react-router-dom"

const Header = () =>{
    const [btnValue,setBtnValue]=useState("Login");
    return (
    <div className="headingContainer">
        <img className="image" src={LOGO_URL} />
        <div className="nav-list">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="btn" onClick={()=>{
                    btnValue=== "Login"?setBtnValue("Logout"):setBtnValue("Login")
                }}>{btnValue}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;