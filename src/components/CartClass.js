import React from "react"

class CartClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"krishna"
            },
            userInfo2:{
                name:"varma"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vamsi");
        const data2 = await fetch("https://api.github.com/users/varma");
        const info=await data.json();
        const info2=await data2.json();
        console.log(info)
        console.log(info2)
        this.setState({
            userInfo:info,
            userInfo2:info2
        })
    }
    render(){
        return (
            <div>
                <h2>Welcome to the cart session</h2>
        <h3>{this.state.userInfo.name+this.state.userInfo2.login}</h3>
            </div>
        )
    }
}

export default CartClass