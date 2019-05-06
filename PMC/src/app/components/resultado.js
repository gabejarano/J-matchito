import React, { Component } from 'react';

class Resultado extends Component {


    constructor(props) {
        super(props);
        this.state = {
            p1: 0,
            p2: 0,
            p3: 0,
            p4: 0,
            p5: 0
        }
        this.cambiar = this.cambiar.bind(this);
    }
    cambiar(e) {
        this.props.metodoEquipo();
    }

    getPortions() {
        console.log('IDGROUPP----' + this.props.idGrup)
        fetch('/api/task/groups/' + this.props.idGrup)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch('/api/task/groups/' + this.props.idGrup + '/eval')
                    .then(res => {
                        res.json();
                        this.setState({
                            p1: res[0],
                            p2: res[1],
                            p3: res[2],
                            p4: res[3],
                            p5: res[4]
                        })
                    })
                });
            }
    render(){
                            return(
            <div>

                        <div className="grafico">
                            <div className="sombra"></div>
                            <div id="porcion1" className="recorte"><div className="quesito" data-rel={this.state.p1}></div></div>
                            <div id="porcion2" className="recorte"><div className="quesito" data-rel={this.state.p2}></div></div>
                            <div id="porcion3" className="recorte"><div className="quesito" data-rel={this.state.p3}></div></div>
                            <div id="porcion4" className="recorte"><div className="quesito" data-rel={this.state.p4}></div></div>
                            <div id="porcion5" className="recorte"><div className="quesito" data-rel={this.state.p5}></div></div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="input-field col s8">
                                    Explicacion : 'Explicacion'
                    </div>
                            </div>
                        </div>
                        <div>
                            <center><button type="submit" onClick={this.cambiar} className="btn light-blue darken-4">Regresar</button></center>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
            </div >
        )
            }
}
    export default Resultado;