import React from 'react'
import welcomeBonus from "../images/welcomeBonus/welcomeBonus.png"
import line from "../images/welcomeBonus/line.png"
import arrow from "../images/welcomeBonus/arrow.png"

const WelcomeBonus = () => {
  return (
    <div className='welcomeBonus'>
        <div className='welcomeBonus-image'>
            <img src={welcomeBonus} alt='treeasure'/>
        </div>
        <div className='welcomeBonus-textContent'>
            <p className='welcomeBonus-textContent--title'>Welcome bonus</p>
            <p>100% up to €500</p>
            <p>+120 FreeSpins</p>
        </div>
        <div className='welcomeBonus-actions'>
            <div>
                <img src={line} alt="line" />
            </div>
            <div className='welcomeBonus-actions--arrow'>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    </div>
  )
}

export default WelcomeBonus