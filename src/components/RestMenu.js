import Shimmer from "./Shimmer";
import {MENU_LOGO_URL,REST_MENU_URL} from "../utils/constant"
import {useParams} from "react-router-dom"
import {useState} from "react"
import MenuList from "./MenuList";
import useRestMenu from "../utils/useRestMenu";

const RestMenu = () =>{
    const {id} = useParams();
    const {Menu,restInfo} = useRestMenu(id) // custom Hook
    if(restInfo===null) return <Shimmer />;
    const {info} = restInfo?.cards[2]?.card?.card
    return  (
        <div className="mb-9">
            <div className="border">
                <div className="restaDetails mx-52 my-8 px-20 shadow-md">
                    <strong className="text-lg">{info?.name}</strong>
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
            {Menu.map((e,index)=>(
                <MenuList key={index} data = {e}/>
            ))}
        </div>
    )
}

export default RestMenu;