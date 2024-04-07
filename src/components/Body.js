import RestCard from "./RestCard"
import {restObj} from "./../constants/mockData"
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"
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
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const dataJson =await data.json();
        const info = dataJson?.data?.cards
        const filtering = info.filter((data)=> data.card.card.info);
        setrestaurantList(filtering);
        setFilterRestList(filtering);
    }
    const topRated =()=>{
        setrestaurantList(restaurantList.filter((restaurantCard)=>{
            return restaurantCard.card.card.info.avgRating >= 4.4;
        }))
    }

    if(restaurantList.length ===0){
       return <Shimmer />
    }

    return (
        <div className="resContainer">
            <div className="searchContainer" style={{margin:"30px"}}>
                <form className="form">
                    <input type="text" className="input" value={search} onChange={(e)=>{
                        setSearch(e.target.value);
                    }}></input>
                    <button type="button" className="search" onClick={()=>{
                        const filteredRest = restaurantList.filter(
                            (rest)=>rest?.card?.card?.info?.name.toLowerCase().includes(search.toLowerCase())
                        )
                        setFilterRestList(filteredRest)
                        console.log(restaurantList)
                    }} >Search</button>
                </form>
                <button className="rated-btn"onClick={topRated}>Top rated Restaurants</button>
            </div>
            <div className="cards">
                {filterRestList?.map(restaurant =><RestCard key={restaurant.card.card.info.id} restaurantData = {restaurant} />)}
            </div>
        </div>
    )
}

export default Body