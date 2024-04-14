import {MENU_LOGO_URL} from "./../utils/constant"
const MenuItemsList = ({data}) => {
    console.log(data)
    const {info} = data.card
    return (
        <div className="m-auto py-7 justify-between border-gray-200 border-b-2 mx-40 flex">
            <div className="w-[600px] px-5">
                <div className="text-lg font-bold">{info.name}</div>
                <div><span className="font-bold">₹ </span><span> {(info.defaultPrice)/100 ||(info.price)/100 }</span></div>
                {info.ratings.aggregatedRating.rating?<span>⭐ {info.ratings.aggregatedRating.rating} ({info.ratings.aggregatedRating.ratingCount.split(" ")[0]})</span>:<></>}
                {info.description?<div className="text-xs">{info.description}</div>:<></>}
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="p-1 ml-7 mt-16 pl-4 rounded-md bg-gray-300 shadow-lg">Add +</button>
                </div>
                    {info.imageId?
                    <img className="w-36 h-30 pr-5" src={MENU_LOGO_URL+info.imageId}></img>:<></>}
            </div>
        </div>
    )
}
export default MenuItemsList