import React from 'react'

export const RegistrationPage = (props) => {
    const {mobile, handleMobile} = props;
    return (
        <div>
            <h1 className="text-align heading-color">Registration</h1>
            <div className="reg-container">
                <div className="reg-form">
                    <div style={{ marginLeft: '20px' }}>
                        <input type="number" value={mobile} onChange={handleMobile} className="input" placeholder="Enter mobile number..." />
                    </div>
                    <div className="text-align">
                        <button className="button" onClick={props.handleRegistration}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
