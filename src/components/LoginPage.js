import React from 'react'

export const LoginPage = (props) => {
    const {otp, handleOTP, handleLogin} = props;
    return (
        <div>
            <h1 className="text-align heading-color">Login</h1>
            <div className="reg-container">
                <div className="reg-form">
                    <div style={{ marginLeft: '20px' }}>
                        <input type="number" value={otp} onChange={handleOTP} className="input" placeholder="Enter OTP..." />
                    </div>
                    <div className="text-align">
                        <button className="button" onClick={handleLogin}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
