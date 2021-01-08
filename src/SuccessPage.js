import React from 'react';


export default  function SuccessPage() {
    return (
        <>
            <div className="center-container">
                <div className="successBox">
                    <p className="successHeading">
                        Your Registration Was Successful
                    </p>
                    <p className="successText">
                        Welcome Aboard
                    </p>
                    <button
                        href="https://ava-sigma.vercel.app"
                        className="playerReg-btn">
                        Home
                    </button>

                </div>

            </div>

        </>
    )
}