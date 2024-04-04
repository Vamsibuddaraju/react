import {LOGO_URL} from "./../constants/constant"

const Header = () =>{
    return (
    <div className="headingContainer">
        <img className="image" src={LOGO_URL} />
        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;