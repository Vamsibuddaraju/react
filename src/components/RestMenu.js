import Shimmer from "./Shimmer";
import {MENU_LOGO_URL,REST_MENU_URL} from "../utils/constant"
import {useParams} from "react-router-dom"
import useRestMenu from "../utils/useRestMenu";

const RestMenu = () =>{
    const {id} = useParams();
    const {filterVeg,Menu,restInfo,filterMenu} = useRestMenu(id) // custom Hook
    if(restInfo===null) return <Shimmer />;
    const {info} = restInfo?.cards[2]?.card?.card

    return  (
        <div className="menu">
            <div className="border">
                <div className="restaDetails">
                    <h2>{info?.name}</h2>
                    <div>
                        <p>{info?.avgRatingString} {(info?.totalRatingsString)} {info?.costForTwoMessage}</p>
                    </div>
                    <div>
                        <p>{info?.cuisines.join(", ")}</p>
                    </div>
                    <div className="location">
                        <div className="outlet">
                            <span><strong>Outlet</strong> {info?.locality}</span>
                        </div>
                        <div className="travel-time">
                            <strong>{info?.sla?.slaString.toLowerCase()}</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-filter">
                <button className="veg-nonveg" onClick={()=>{
                    filterVeg(1);
                }}>Veg</button>
                <button className="veg-nonveg" onClick={()=>{
                    filterVeg(0);
                }}>NonVeg</button>
                <button className="veg-nonveg" onClick={()=>{
                    const resetFilter = Menu.filter(item=>item);
                    setFilterMenu(resetFilter)
                }}>All</button>
            </div>
            <div className="recommended">
                <div><h3>Recommended Menu ({filterMenu.length})</h3></div>
                    {filterMenu.map((items)=>(
                        <div key={items?.card?.info?.id} className="recom-list">
                            <div>
                                <h4>{items?.card?.info?.name}</h4>
                                <h4>Rs: {(items?.card?.info?.defaultPrice??items?.card?.info?.price )/100}</h4>
                                <p>{items?.card?.info?.description}</p>
                            </div>
                            <div>
                                <img className="rec-item-img" src={MENU_LOGO_URL+(items.card?.info?.imageId)} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default RestMenu;