import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          props.displaySushis.map((sushi) => {
            return <Sushi sushiToDisplay={sushi} 
            key={sushi.id} 
            eatenStatus={props.eatenSushi.includes(sushi)}
            eatSushi={props.eatSushi}
            />
          })

        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer