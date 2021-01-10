import React from 'react';


export default function SuccessPage() {
    return (
        <>
            <div
                style={{ marginTop: 100 }}
                className="center-container">
                <div className="successBox">
                    <p className="successHeading">
                        Welcome to BallHive
                           <br />
                        <p
                            style={{ fontSize: 20 }}
                            className="successHeading">
                            Your registration was successful
                        </p>


                    </p>
                    <p className="successText">
                        Thank you for registering with us. We are currently building our mobile app with all the features to help players
                        showcase their talents and help scouts discover talents.
                       <br />  <br />

                        <b>NOTE:</b> This registration is to keep you updated 
                        about our progress, give you an early advantage upon our
                         product launch, and also bring special opportunities to you.
                    </p>
                    <a href="https://sportsavalanche.com/">
                        <button
                            className="successBox-btn">
                            Home
                    </button>
                    </a>


                </div>

            </div>

        </>
    )
}