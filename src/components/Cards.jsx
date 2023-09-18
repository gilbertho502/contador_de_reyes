import { useEffect, useState } from "react"

// Tarjeta Hijo
//props
const Cards = ({nombre, vacas, image, clickrey})=> {
    
    const [click, setClick] = useState(0)
    
    const handleClick = () => {
        setClick(click +1)
        // clickrey(nombre, click+1)
    }
    //otra solucion
    useEffect(()=>{
        clickrey(nombre, click)
    },[click])

    return(
        <div className="card">
            <div className="card-body">
            <h1 className="title">{nombre}</h1>
            <p className="menu">Come {vacas} vacas al dia</p>
            <img width={300} src={image} alt={nombre} />
            <div className="caja">
                <button className="btn" onClick={handleClick}>Votame</button>
                <p className="puntuacion">{click}</p>
            </div>
            </div>
        </div>
    )
}

export {Cards}
