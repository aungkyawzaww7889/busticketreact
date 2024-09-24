import React from 'react'

const Citydata = ()=>{

    const cities = ["Yangon","Mandalay","Bago","Taungyi"];

    return (
        // <option value="">Yangon</option>
        <>
            {
                cities.map((city,idx) => <option key={idx}>{city}</option>)
            }
        </>
    )
}

export default Citydata;