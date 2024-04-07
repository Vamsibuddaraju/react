import {LOGO_URL} from "./../constants/constant"
import {useState} from "react"

const Header = () =>{
    const [btnValue,setBtnValue]=useState("Login");
    return (
    <div className="headingContainer">
        <img className="image" src={LOGO_URL} />
        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
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