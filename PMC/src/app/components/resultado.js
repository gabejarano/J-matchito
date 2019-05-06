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

    componentDidMount(){
        this.getPortions();
    }
    getPortions() {
        console.log('IDGROUPP----' + this.props.idGrup)

        fetch('/api/task/groups/' + this.props.idGrup + '/eval')
            .then(res => res.json())
            .then(data=>{
                console.log('----------data----' + data)
                this.setState({
                    p1: Math.trunc(data[0] * 100),
                    p2: Math.trunc(data[1] * 100),
                    p3: Math.trunc(data[2] * 100),
                    p4: Math.trunc(data[3] * 100),
                    p5: Math.trunc(data[4] * 100)
                })

            })
                
            
    };


    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class="container">
                    <div class="p-t-40 p-b-40  text-center">

                        <h2 class="text-center">
                            Observa tus cualidades y caracteristicas de tu personalidad</h2>
                    </div>
                </div>
                <div >
                    <div class="container">
                        <div class="p-t-60 p-b-50 ">
                            <div class="row feature-list">
                                <div class="col-md-3 ">
                                    <h4 class="custom-font title">
                                        Resposabiliad</h4>
                                    <h1 class="custom-font">
                                        <span class="number-animator" data-value="4500" data-animation-duration="800">{this.state.p2 + "%"}</span></h1>
                                    <div class="col-md-8 no-padding">
                                        <div class="progress transparent progress-small no-radius ">
                                            <div class="progress-bar progress-bar-black animated-progress-bar " data-percentage="79%">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="custom-font title">
                                        Neuroticismo</h4>
                                    <h1 class="custom-font">
                                        <span class="number-animator" data-value="376" data-animation-duration="800">{this.state.p5 + "%"}</span></h1>
                                    <div class="col-md-8 no-padding">
                                        <div class="progress transparent progress-small no-radius no-margin">
                                            <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="45%">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="custom-font title">
                                        Apertura al cambio</h4>
                                    <h1 class="custom-font">
                                        <span class="number-animator" data-value="19,500" data-animation-duration="800">{this.state.p1 + "%"}</span></h1>
                                    <div class="col-md-8 no-padding">
                                        <div class="progress transparent progress-small no-radius no-margin">
                                            <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="12%">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="custom-font title">
                                        Amabilidad</h4>
                                    <h1 class="custom-font">
                                        <span class="number-animator" data-value="19,500" data-animation-duration="800">{this.state.p4 + "%"}</span></h1>
                                    <div class="col-md-8 no-padding">
                                        <div class="progress transparent progress-small no-radius no-margin">
                                            <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="12%">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="custom-font title">
                                        Extroversion</h4>
                                    <h1 class="custom-font">
                                        <span class="number-animator" data-value="19,403" data-animation-duration="800">{this.state.p3 + "%"}</span></h1>
                                    <div class="col-md-8 no-padding">
                                        <div class="progress transparent progress-small no-radius no-margin">
                                            <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="85%">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <center><button type="submit" onClick={this.cambiar} className="btn light-blue darken-4">Regresar</button></center>

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
                <br></br>
                <br></br>
            </div>
        )
    };
};
export default Resultado;