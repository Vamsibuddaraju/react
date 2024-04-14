import {useState,useEffect} from "react"
import {MENU_LOGO_URL,REST_MENU_URL} from "../utils/constant"
const useRestMenu = (id) => {

    const [restInfo, setRestInfo] = useState(null);
    const [Menu,setMenu]=useState(null);
    // const [filterMenu,setFilterMenu]=useState(null);

    useEffect(()=>{
        dataFetch()
    },[])

    const dataFetch = async () =>{
        const data = await fetch(REST_MENU_URL+id);
        const json = await data.json()
        const {cards} = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
        const itemCards= cards.filter((c)=> {return c.card?.card?.["@type"].split(".").includes("ItemCategory") && c.card?.card?.["title"] });
        console.log("cards before filtered:" ,cards)
        console.log("cards filtered:" ,itemCards)
        setRestInfo(json.data);
        setMenu(itemCards)
    }
    return {Menu,restInfo}
}

export default useRestMenu;