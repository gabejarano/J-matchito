import React, {Component} from 'react';

class Equipo extends Component{
   

    constructor(props){
        super(props);
        this.state={
            nameGroup : "",
            idYo: "",
            members : []
        }
        this.personalidad= this.personalidad.bind(this);
        this.cambiar= this.cambiar.bind(this);
        this.resultado= this.resultado.bind(this);
      }
    
    componentDidMount(){
        this.obtenerInformacion();
    }
    obtenerInformacion(){
        fetch('/api/task/groups')
        .then(res=>res.json(res))
        .then(data=>{
            var nombreGrupo = data[data.length-1].name;
            var miembros = data[data.length-1].members;
            var id = miembros[miembros.length-1].member;
            console.log(miembros)
            this.setState({
                nameGroup: nombreGrupo,
                members: miembros,
                idYo :id
            })           
        })
    };

    cambiar(e){
        this.props.metodoRegistro();
    }
    personalidad(e){
        this.props.metodo2();
    }
    resultado(e){
        this.props.metodoResultado();
    }
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="row">
                                        <div className="input-field col s12">
												<h2>Grupo de desarrollo</h2>
                                            </div>
                                        </div>
                                        <div className="input-field col s8">
                                            Nombre : {this.state.nameGroup}
                                        </div>
                                        <div className="input-field col s8">
                                            Descripcion : 'Descripcion Equipo' 
                                        </div>
                                        <div className = "col s8">
                                            <button onClick= {this.resultado} className="btn light-blue darken-4">Medir rendimiento</button>
                                        </div>
                            </div>
                        <div className="col s7">
                            <div className="card">
                                <div className="card-content">
                                    <form >
										<div className="row">
                                            <div className="input-field col s8">
												Integrante 1<br/>
                                            </div>
                                            <div className="input-field col s4">
                                            <button onClick = {this.personalidad}type="submit" className="btn light-blue darken-4">
                                            Ver personalidad
                                            </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s8">
											 {this.state.idYo}<br/>
                                            </div>
                                            <div className="input-field col s4">
                                            <button onClick = {this.personalidad} type="submit" className="btn light-blue darken-4">
                                            Ver personalidad
                                            </button>
                                            </div>
                                            <div className="input-field col s4">
                                            <button onClick = {this.cambiar} type="submit" className="btn light-blue darken-4">
                                            Realizar test
                                            </button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
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
            </div>
        )
    }
}
export default Equipo;