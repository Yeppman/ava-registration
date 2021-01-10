import React from 'react';


export default function SuccessPage() {
    return (
        <>
            <div
                style={{ marginTop: 100 }}
                className="center-container">
                <div className="successBox">
                    <p className="successHeading">
                          Welcome to BallHive!
                           <br/>
                          <p
                          style={{fontSize:20}}
                          className="successHeading">
                            Your registration was successful
                        </p>
                       
                      
                    </p>
                    <p className="successText">
                        Thank you for registering with us. We are currently building our mobile app with all the features to help players
                        showcase themselves and help scouts discover talents.
                       <br />
                        <b>NOTE:</b> This is a pre-product sign up to keep you updated about our product launch.
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