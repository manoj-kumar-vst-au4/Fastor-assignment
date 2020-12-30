import React from 'react'

export const RestaurentList = (props) => {
    const { getImage, data } = props
    return (
        <div>
            <h1 className="text-align heading-color">Restaurant List</h1>
            <div style={{ display: "flex", flexDirection: 'column', float: 'center' }}>
                {
                    data.map(obj => {
                        return (
                            <div style={{ display: 'flex', marginBottom: '15px', marginLeft: '120px', cursor: 'pointer' }} onClick={() => getImage(obj.image)}>
                                <div>
                                    <img src={obj.image} className="image" />
                                </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    <p style={{ fontSize: '20px', fontWeight: '500', marginTop: '8px', color: '#04045a', marginBottom: '5px' }}>{obj.restaurant_name}</p>
                                    <p style={{ marginTop: '0px' }}>{obj.address_complete}</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="text-align">
                                            <p style={{ marginTop: '0px', color: '#04045a', marginBottom: '5px', fontWeight: '500' }}>{obj.rating.restaurant_avg_rating} Rating</p>
                                            <p style={{ marginTop: '0px', color: '#dbaa05' }}>Popularity</p>
                                        </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>
                                            <p style={{ marginTop: '0px', color: '#04045a', marginBottom: '5px', fontWeight: '500' }}>{obj.avg_cost_for_two} Rating</p>
                                            <p style={{ marginTop: '0px', color: '#dbaa05' }}>Cost for Two</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
