import React from 'react'
import logo from './image/ball.png'
import { Button } from 'semantic-ui-react'


class Store extends React.Component{

    state = {
        count: 10
    }


    handleOnClick = (evt) => {
        // console.log(this)

        this.setState(oldState => ({count: oldState.count + 1}) )

        // this.setState(oldState => {
        //     return{
        //         count: oldState.count + 1 
        //     }
        // })
    }

    render(){
        // console.log(this.props.sportName)
        return(
            <li className="container">
                <img src={logo} width="100px" alt="controller"  />
                <p>Sport Shop: {this.props.sportName}</p>
                <button className="ui primary button" onClick={this.handleOnClick}> Number of Likes: {this.state.count}</button>
            </li>
        )
    }

}

export default Store

