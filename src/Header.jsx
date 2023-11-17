import './header.css'

function Header (props){
    return (
        <>
        <div className='all'>
            <div className='caja' >
                <img src={props.imagen} style={{width: '400px'}}/>
                </div>
                <div className='cajaDos'>
                <h1 style={{color: props.color}}> {props.text}</h1>
                </div>
                    <div className='cajaTres'>
                <p style={{color:'white'}}> {props.lenguaje}</p>
                    </div>
                    </div>
            </>
        )
}

export default Header