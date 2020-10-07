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
       
         let {sportName, likes} = this.props.shop
        return(
            <li className="container">
                <img src={logo} width="100px" alt="controller"  />

                <p>Sport Shop: {sportName}</p>
                <Button className="button like" onClick={this.handleOnClick}> Number of Likes: {likes}</Button>
            </li>
        )
    }

}

export default Store

