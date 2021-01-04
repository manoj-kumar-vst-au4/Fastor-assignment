import React from 'react'

export const RegistrationPage = (props) => {
    const { mobile, handleMobile, graphData } = props;
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
            <div >
                {graphData.map(obj => {
                    return (
                        <div className="graph-container">
                            <p>Mission Name : {obj.mission_name}</p>
                            <p> Launch Site : {obj.launch_site.site_name_long}</p>
                            <p>Launch Date : {obj.launch_date_local}</p>
                            <div>
                                {obj.ships.map((obj2, index) => {
                                    return (
                                        <div className="graph-ship">
                                            <p>Ship No. : {index+1} {obj2.name}</p>
                                            <img src={obj2.image} width="20" height="20" className='graph-image' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
