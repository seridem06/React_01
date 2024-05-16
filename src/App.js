import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { codigo: 1, descripcion: "coca-cola", precio: 2.50 },
        { codigo: 2, descripcion: "inka-cola", precio: 2.20 },
        { codigo: 3, descripcion: "fanta", precio: 1.70},
      ],
    };
    this.borrar = this.borrar.bind(this);
  }

  borrar(cod) {
    var temp = this.state.articulos.filter((el) => el.codigo !== cod);
    this.setState({ articulos: temp });
  }

  render() {
    return (
      <div className="App bg-dark text-white d-flex justify-content-center align-items-center vh-100">
      <table className="table table-success table-striped" style={{ width: "50%", backgroundColor: "#ffffff", color: "#000000" }}>
        <thead className="bg-success text-white">
          <tr className="font">
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borrar?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map((articulo, index) => (
              <tr className="font"key={index}>
                <td>{articulo.codigo}</td>
                <td >{articulo.descripcion}</td>
                <td>{articulo.precio}</td>
                <td><button className="btn-19" onClick={()=>this.borrar(articulo.codigo)}>Borrar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     );

    }
    borrar(cod) {
      var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
      this.setState({
        articulos: temp
      })
  }
  
  }
  export default App;
  



