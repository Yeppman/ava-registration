import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return ( 
        <>
            <div className="playerReg-stack">
                <div className="playerReg-list">
                    <p className="playerReg-heading">
                     Sign Up as a Player
                    </p>
                    <p className="playerReg-text">
                        Sign Up today for a player 
                        for people to erkkslk 4reiuhudsn
                    </p>

                </div>
               <div className="playerReg-list">
               <p className="playerReg-heading">
                     Sign Up as a Player
                    </p>
                    <p className="playerReg-text">
                        Sign Up today for a player 
                        for people to erkkslk 4reiuhudsn
                    </p>
                    <Link to="/scout-registration">
                        Scouts
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
                        Coach
                            </Link>
                </div>
            </div>
        </>
    )
}
