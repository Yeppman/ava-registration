import React from 'react';


export default  function SuccessPage() {
    return (
        <>
            <div
            style={{marginTop:300}}
            className="center-container">
                <div className="successBox">
                    <p className="successHeading">
                        Your Registration Was Successful
                    </p>
                    <p className="successText">
                        Welcome Aboard
                    </p>
                    <a  href="https://ava-sigma.vercel.app">
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