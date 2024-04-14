const RestCard = (props) =>{
    const {restaurantData} = props
    const {info} = restaurantData
    // const cloudinaryImageId = restaurantData.card.card.info.cloudinaryImageId
    return(
        <>
        <div className="m-2 p-2 w-[190px] h-80 bg-blend-color shadow-2xl hover:bg-gray-300">
            <img className="h-52 rounded-xl" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+info.cloudinaryImageId}/>
    <h3 className="font-bold pl-2 font-sans">{info.name}</h3>
            <h3 className="pl-2 font-mono">Rating : {info.avgRating}</h3>
            <h3 className="pl-2 font-mono">{info.veg ? "Veg":"NonVeg"}</h3>
        </div>
        </>
    )
};

export const ClosedRestCard = (RestCard) =>{
    return (props)=>{
        return(
            <div className="bg-red-400">
                <RestCard {...props} />
            </div>
        )
    }

}

export default RestCard;