import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return ( 
        <>
            <div className='center-container'>
                <div className="playerReg-stack">
                <div className="playerReg-list">
                    <p className="playerReg-heading">
                     Sign Up as a Player
                    </p>
                    <p className="playerReg-text">
                        Sign Up today for a player 
                        for people to erkkslk 4reiuhudsn
                    </p>
                    
                        <Link to="/player-registration">
                    <button className="playerReg-btn">
                        Sign   Up
                    </button>
                     </Link>

                </div>
               <div className="playerReg-list">
               <p className="playerReg-heading">
                     Sign Up as a Scout
                    </p>
                    <p className="playerReg-text">
                        Sign Up today for a player 
                        for people to erkkslk 4reiuhudsn
                    </p>
                    <Link to="/scout-registration">
                    <button className="playerReg-btn">
                        Sign   Up
                    </button>
                     </Link>
                </div>
                <div className="playerReg-list">
                <p className="playerReg-heading">
                     Sign Up as a Player
                    </p>
                    <p className="playerReg-text">
                        Sign Up today for a player 
                        for people to erkkslk 4reiuhudsn
                    </p>
                    <Link to="/coach-registration">
                         <button className="playerReg-btn">
                        Sign Up
                    </button>
                            </Link>
                </div>
            </div>
            </div>
        </>
    )
}
