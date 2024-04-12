import {useEffect,useState} from "react"

const useNetworkStatus = () => {
    const [status,setStatus]= useState(true);

    const onlineStatus=()=>{
        setStatus(true)
    }
    const offlineStatus=()=>{
        setStatus(false)
    }

    window.addEventListener("online",()=>{
        onlineStatus();
    })
    window.addEventListener("offline",()=>{
        offlineStatus()
    })

    return status;
}

export default useNetworkStatus;