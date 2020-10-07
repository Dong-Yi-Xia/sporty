import { render } from '@testing-library/react'
import React from 'react'
import Store from './Store'


function ShopContainer (props) {

    
    let arrComponents = props.shops.map(singleObj => {
        return <Store key={singleObj.sportName} shop={singleObj} />
    })

   
    return(
        <ul>
            {arrComponents}
        </ul>
    )
    
}



export default ShopContainer