import {useState,useEffect} from "react"
import {MENU_LOGO_URL,REST_MENU_URL} from "../utils/constant"
const useRestMenu = (id) => {

    const [restInfo, setRestInfo] = useState(null);
    const [Menu,setMenu]=useState(null);
    const [filterMenu,setFilterMenu]=useState(null);

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

    return {filterVeg,Menu,restInfo,filterMenu}
    

}

export default useRestMenu;