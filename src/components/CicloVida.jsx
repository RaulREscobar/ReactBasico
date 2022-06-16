import React, { Component } from 'react'

class Reloj extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log(3, "El componente ha sido elimnado del DOM");
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
        
}

export default class CicloVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente se iniciaiza, aun NO esta en el DOM")

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        }
        this.temporizador = null
    }

    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2, "El estado o las props del componente han cambiado");
        console.log(prevProps, prevState);
    }


    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        })
    }

    detetner = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false
        })
    }

    render() {
        console.log(4, "El componente se dibuja o redibuja por algun cambio en el DOM");
        return (
            <div>
                <h1>Ciclo de vida de un componente de clase</h1>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detetner}>detetner</button>
            </div>
        )
    }
} 