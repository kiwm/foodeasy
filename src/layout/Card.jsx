import React from 'react'
import './Card.css'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }
    
    function teste () {
        alert(`Numero: ${props.titulo}`)
        document.getElementsByClassName("Card")
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}
                <button value={props.titulo} onClick={teste}>Realizar Pedido</button>
            </div>
        </div>
    )
}