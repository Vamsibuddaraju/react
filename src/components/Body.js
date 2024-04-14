import useNetworkStatus from "./../utils/useNetorkStatus"
import RestCard, {ClosedRestCard}from "./RestCard"
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import { ClosedRestCard } from "./RestCard"
const Body = () =>{
    const [restaurantList,setrestaurantList]=useState([]);
    const [filterRestList,setFilterRestList]= useState([]);
    const [search,setSearch] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    //https://corsproxy.io/? is to bypass the cors error,
    //instead of directly contacting swiggy api we req through corsproxy.

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const dataJson =await data.json();
        const info = dataJson?.data?.cards
        const filtering = info[1].card.card.gridElements.infoWithStyle.restaurants;
        setrestaurantList(filtering);
        setFilterRestList(filtering);
    }
    const topRated =()=>{
        setFilterRestList(restaurantList.filter((restaurantCard)=>{
            // return restaurantCard.card.card.info.avgRating >= 4.4;
            return restaurantCard?.info?.avgRating >= 4;
        }))
    }

    const status = useNetworkStatus();
    const ClosedRest= ClosedRestCard(RestCard);

    if(status===false){
        return (
            <h3>It looks like you are offline</h3>
        )
    }

    if(restaurantList.length ===0){
       return <Shimmer />
    }
    if(filterRestList.length ===0){
        return (
            <div className="h-96">
                <div className="searchContainer flex shadow-md " >
                <div className="search m-4 py-4">
                    <input type="text" className="border border-black border-2"  value={search} onChange={(e)=>{
                        setSearch(e.target.value);
                    }}></input>
                    <button type="button" className="search ml-4 p-1  bg-black text-white rounded-sm" onClick={()=>{
                        const filteredRest = restaurantList.filter(
                            // (rest)=>rest?.card?.card?.info?.name.toLowerCase().includes(search.toLowerCase())
                            (rest)=>rest?.info?.name.toLowerCase().includes(search.toLowerCase())
                        )
                        setFilterRestList(filteredRest)
                    }} >Search</button>
                </div>
                <div className="m-4 py-4">
                <button className="search ml-4 p-1 rounded-sm bg-orange-600  text-white" onClick={topRated}>Top rated Restaurants</button>
                </div>
            </div>
                <div className="text-center p-40">
                    <h1>Oops....! no restaurant found</h1>
                </div>
            </div>
        )
     }


    return (
        <div className="resContainer mx-2">
            <div className="searchContainer flex shadow-md " >
                <div className="search m-4 py-4">
                    <input type="text" className="border border-black border-2"  value={search} onChange={(e)=>{
                        setSearch(e.target.value);
                    }}></input>
                    <button type="button" className="search ml-4 p-1  bg-black text-white rounded-sm" onClick={()=>{
                        const filteredRest = restaurantList.filter(
                            // (rest)=>rest?.card?.card?.info?.name.toLowerCase().includes(search.toLowerCase())
                            (rest)=>rest?.info?.name.toLowerCase().includes(search.toLowerCase())
                        )
                        setFilterRestList(filteredRest)
                    }} >Search</button>
                </div>
                <div className="m-4 py-4">
                <button className="search ml-4 p-1 rounded-sm bg-orange-600  text-white" onClick={topRated}>Top rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterRestList?.map(restaurant =>
                    <Link key={restaurant.info.id} className="plain-text" to={"/restaurant/"+restaurant.info.id}>{restaurant.info.availability.opened===false?<ClosedRest restaurantData = {restaurant}/>:<RestCard restaurantData = {restaurant} />}</Link>)}
            </div>
            {/* <div className="flex flex-wrap">
                {filterRestList?.map(restaurant =>
                    <Link key={restaurant.info.id} className="plain-text" to={"/restaurant/"+restaurant.info.id}><RestCard restaurantData = {restaurant} /></Link>)}
            </div> */}
        </div>
    )
}

export default Body