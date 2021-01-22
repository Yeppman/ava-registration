import React from 'react'
 
var c = 'https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Asset+2%403x.png'

export default function Navbar() {
    return (
        <>
            <ul className="navblock">
                
                <li className="navlist-icon-box">
                    <img
                    href="https://sportsavalanche.com"
                    src ={c}
                    className="navlist-icon"
                    />
                </li>


                {/* <li className="navlist">
                    <a href="https://sportsavalanche.com">
                    Home
                    </a>
                </li> */}

            </ul>
        </>
    )
}
