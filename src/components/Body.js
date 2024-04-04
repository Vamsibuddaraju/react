import RestCard from "./RestCard"
import {restObj} from "./../constants/mockData"
import {useState} from "react";
const Body = () =>{
    const [mockData,setMockData]=useState(restObj);
    const topRated =()=>{
        setMockData(mockData.filter((restaurantCard)=>{
            return restaurantCard.card.card.info.avgRating >= 4;
        }))
    }

    return (
        <div className="resContainer">
            <div className="searchContainer" style={{margin:"30px"}}>
                <button className="rated-btn" 
                onClick={topRated}>Top rated Restaurants</button>
            </div>
            <div className="cards">
                {mockData.map(restaurant=> <RestCard restaurantData = {restaurant} />)}
            </div>
        </div>
    )
}

export default Body