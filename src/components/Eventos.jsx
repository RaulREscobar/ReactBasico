import React, { Component } from 'react'

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e) {
        console.log('sumar')
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e) {
        console.log('restar')
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button><button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>

            </div>
        )
    }
}


/* Propierties Initializer */

export class EventosES7 extends Component {
    state = {
        contador: 0,
    }

    //Arrow function
    sumar = (e) => {
        console.log('sumar')
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        console.log('restar')
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>

            </div>
        )
    }
}

/* function Boton (props) {
    return (
        <button onClick={props.myOnClick}>Boton echo componente</button>
    )
}
 */
/* Boton Simplificado */
const Boton = ({ myOnClick }) => (
    <button onClick={myOnClick}>Boton echo componente</button>
)
export class MasSobreEventos extends Component {
    handleClick = (e, mensaje) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }

    render() {
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) =>
                    this.handleClick(e, "Hola pasando parametro desde un evento")}
                >
                    Saludar
                </button>

                {/* Evento Personalizado */}
                {/*    <Boton onClick={(e) =>
                    this.handleClick(e, "Hola pasand parametro desde un evento")} />
                */}
                <Boton myOnClick={(e) =>
                    this.handleClick(e, "Hola pasando parametro desde un evento en un componente")} />
            </div>
        )
    }
}