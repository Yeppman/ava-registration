import React from 'react';


export default function SuccessPage() {
    return (
        <>
            <div
                style={{ marginTop: 300 }}
                className="center-container">
                <div className="successBox">
                    <p className="successHeading">

                    </p>
                    <p className="successText">
                        Thank you for registering with us. We are currently building our mobile app with all the features to help players
                        showcase themselves and help scouts discover talents.
                       <br />

                    This registration is to keep you updated about our progress, give you an early
                    advantage upon our product launch, and also bring special opportunities to you.
                    </p>
                    <a href="https://ava-sigma.vercel.app">
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