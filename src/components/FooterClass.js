import React from "react"

class FooterClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="w-[100%] h-24 bg-slate-600">
                    <ul className="flex text-white">
                        <li className="px-6 py-8">HELP</li>
                        <li className="px-6 py-8">COURTSEY</li>
                        <li className="px-6 py-8">SOCIAL-PAGE</li>
                    </ul>
            </div>
        )
    }
}

export default FooterClass