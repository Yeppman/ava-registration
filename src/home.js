import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './section/footer'

const scoutImage = 'https://unsplash.com/photos/a7bBJZmdqK4'
const playerImage = 'https://images.unsplash.com/photo-1519474186793-82838e537b79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvY2NlciUyMHBsYXllcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
const othersImage = 'https://images.unsplash.com/photo-1531861218190-f90c89febf69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c29jY2VyJTIwZmllbGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



export default function HomePage() {
    return (
        <>
            <div className='center-container'>
                <div className="playerReg-stack">
                    <div className="playerReg-list bg1">
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
                    <div className="playerReg-list bg2">
                        <p className="playerReg-heading">
                            Sign Up as a Scout
                    </p>
                        <p className="playerReg-text">
                            Start your journey to discover talented football players.

                    </p>
                        <Link to="/scout-registration">
                            <button className="playerReg-btn">
                                Sign Up
                    </button>
                        </Link>
                    </div>
                    <div className="playerReg-list bg3">
                        <p className="playerReg-heading">
                            Sign Up as Others
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

            <Footer/>
        </>
    )
}
