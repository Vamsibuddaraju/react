import MenuItemsList from "./MenuItemsList";
import {useState} from "react"

const MenuList = ({data}) => {
    const [showItems,setShowItems] = useState(false);
    const title = data.card.card.title;
    const updateItems = () =>{
        setShowItems(!showItems)
    }
    const {itemCards} = data.card.card
    return (
        <div>
           <div className="w-10/12 m-auto px-10 py-5 h-16 shadow-xl flex justify-between cursor-pointer" onClick={()=>updateItems()} >
                <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                <span>▼</span>
            </div>
            <div className="border-black">
                { showItems &&
                    itemCards.map((e,index)=>{
                        return <MenuItemsList key={index} data = {e}/>
                    })
                }
            </div>
        </div>
    )
}

export default MenuList