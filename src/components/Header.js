import {LOGO_URL} from "../utils/constant"
import {useState} from "react"
import {Link} from "react-router-dom"

const Header = () =>{
    const [btnValue,setBtnValue]=useState("Login");
    return (
    <div className="flex justify-between bg-orange-700 shadow-xl m-2 h-20">
        <img className="w-40" src={LOGO_URL} />
        <div className="flex items-center text-white">
            <ul className="flex p-4" >
                <li className="px-6"><Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>HOME</Link></li>
                <li className="px-6"><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>ABOUT</Link></li>
                <li className="px-6"><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>CONTACT</Link></li>
                <li className="px-6"><Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>CART</Link></li>
                <li className="px-6"><Link to="/grocery" style={{ textDecoration: 'none', color: 'inherit' }}>GROCERY</Link></li>
                <button className="btn" onClick={()=>{
                    btnValue=== "Login"?setBtnValue("Logout"):setBtnValue("Login")
                }}>{btnValue}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;