import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/player-registration">
                        Player
                            </Link>
                </li>
                <li>
                    <Link to="/scout-registration">
                        Scouts
                            </Link>
                </li>
                <li>
                    <Link to="/coach-registration">
                        Coach
                            </Link>
                </li>
            </ul>
        </>
    )
}
