import React from "react";
import '../Styles-Components/Character.css'

const Character = ( { characters } ) => {
    return (
        <div className="row">
            {
                characters.map( (item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card card-component" >
                            <img src={item.image} alt="img-character" />
                            <div className="card-body">
                                <h5 className="card-title">{ item.name }</h5>
                                <hr />
                                <p>Location: { item.species }</p>
                                <p>Location: { item.location.name }</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="col">

            </div>
        </div>
    )
}

export default Character;