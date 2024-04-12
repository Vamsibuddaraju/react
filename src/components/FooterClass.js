import React from "react"

class FooterClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="footer-container">
                <div className="footer-list">
                    <ul>
                        <li>Help</li>
                        <li>courtesy</li>
                        <li>Social Page</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FooterClass