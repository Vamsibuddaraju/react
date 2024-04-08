import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import {MENU_LOGO_URL} from "./../constants/constant"

const RestMenu = () =>{
    const [restInfo, setRestInfo] = useState(null);
    const [filterMenu,setFilterMenu]=useState(null);
        useEffect(()=>{
            dataFetch()
        },[])
        const dataFetch = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=11091&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
            const json = await data.json()
            setRestInfo(json.data);
            setFilterMenu(json.data)
            console.log(filterMenu);
        }
    const filterVeg = (flag) =>{
        if(flag){
            let filterData = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards.filter((item)=>(
                item.card?.info.isVeg==1
            ))
            setFilterMenu(filterData)
        }else{
            let filterData = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards.filter((item)=>(
                item.card?.info.isVeg!=1
            ))
            setFilterMenu(filterData)
        }
    }
    if(restInfo===null) return <Shimmer />;
    const {info} = restInfo?.cards[2]?.card?.card
    const {itemCards} = filterMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card
    console.log(itemCards[0]?.card?.info?.name)
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
                <button className="veg-nonveg">NonVeg</button>
            </div>
            <div className="recommended">
    <div><h3>Recommended ({itemCards.length})</h3></div>
                    {itemCards.map((items)=>(
                        <div className="recom-list">
                            <div>
                                <h4>{items?.card?.info?.name}</h4>
                                <h4>Rs: {(items?.card?.info?.defaultPrice?items?.card?.info?.defaultPrice:items?.card?.info?.price )/100}</h4>
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