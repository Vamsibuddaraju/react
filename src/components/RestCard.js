const RestCard = (props) =>{
    const {restaurantData} = props
    const {info} = restaurantData
    // const cloudinaryImageId = restaurantData.card.card.info.cloudinaryImageId
    return(
        <>
        <div className="restCardContainer">
            <img className="cardImage" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+info.cloudinaryImageId}/>
    <h3 style={{paddingLeft:"10px"}}>{info.name}</h3>
            <h3 style={{paddingLeft:"10px"}}>Rating : {info.avgRating}</h3>
            <h3 style={{paddingLeft:"10px"}}>{info.veg ? <strong>Veg</strong> : <strong>NonVeg</strong>}</h3>
        </div>
        </>
    )
}

export default RestCard;