import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {props.eatSushi(props.sushiToDisplay)}}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenStatus ?
            null
          :
            <img src={props.sushiToDisplay.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiToDisplay.name} - ${props.sushiToDisplay.price}
      </h4>
    </div>
  )
}

export default Sushi