import React from 'react'

//UI Skelton

const Shimmer = () => {
    const shimmerEle = []
    for(let i=0;i<20;i++){
        shimmerEle.push(
            <div className="w-52 h-64 m-5 shadow-md"></div>
        )
    }
    return (
        <div className="placeholderContainer flex flex-wrap">
            {shimmerEle}
        </div>
    )
}

export default Shimmer
