import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import {MENU_LOGO_URL,REST_MENU_URL} from "./../constants/constant"
import {useParams} from "react-router-dom"

const RestMenu = () =>{
    const [restInfo, setRestInfo] = useState(null);
    const [Menu,setMenu]=useState(null);
    const [filterMenu,setFilterMenu]=useState(null);
    const {id} = useParams();
    console.log(id)
        useEffect(()=>{
            dataFetch()
        },[])
        const dataFetch = async () =>{
            const data = await fetch(REST_MENU_URL+id);
            const json = await data.json()
            const findCard = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
            console.log(findCard)
            const digits = ()=>{
                for(let i =0;i<findCard.length;i++){
                    if(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[i].card.card.itemCards){
                        return i;
                    }
                }
            }
            let digit = digits();
            console.log(digit)
            const {itemCards} = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[digit].card.card;
            setRestInfo(json.data);
            setMenu(itemCards)
            setFilterMenu(itemCards)
        }
    const filterVeg = (flag) =>{
        if(flag){
            let filterData = Menu.filter((item)=>(
                item.card?.info?.isVeg==1
            ))
            setFilterMenu(filterData)
        }else{
            let filterData = Menu.filter((item)=>(
                item.card?.info?.isVeg!=1
            ))
            setFilterMenu(filterData)
        }
    }
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