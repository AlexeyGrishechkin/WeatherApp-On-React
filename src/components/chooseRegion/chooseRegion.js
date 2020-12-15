import React from 'react'
import './chooseRegion.css'

const ChooseRegion = (props) => {



    return(
            <section className="container">
                <div className="dropdown">
                    <select name="one" className="dropdown-select" onClick={e=>props.setCity(e.currentTarget.value)}>
                        {/* <option value="lat=53.69&lon=23.82">Choose region</option> */}
                        <option value="lat=39.91&lon=116.40">Minsk</option>
                        <option value="lat=53.69&lon=23.82" selected>Grodno</option>
                        <option value="lat=52.09&lon=23.69">Brest</option>
                        <option value="lat=39.90&lon=116.23">Gomel</option>
                        <option value="lat=55.19&lon=30.20">Vitebsk</option>
                        <option value="lat=39.90&lon=116.39">Mogilev</option>
                    </select>
                </div>
            </section>
    )
}

export default ChooseRegion