import React from 'react'
import { Link } from 'react-router-dom'

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
                            Start your journey to showcase your talent and get scouted.

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
                            Start your journey to discover talented football players

                    </p>
                        <Link to="/scout-registration">
                            <button className="playerReg-btn">
                                Sign   Up
                    </button>
                        </Link>
                    </div>
                    <div className="playerReg-list">
                        <p className="playerReg-heading">
                            Sign Up as others
                    </p>
                        <p className="playerReg-text">

                            Sign up here if you are not a player or a scout.
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
