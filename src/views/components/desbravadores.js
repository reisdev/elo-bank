import React, { Component } from "react";
import { connect } from "react-redux"

import Transacao from "./transacao";
import DB from "../../controllers/database";

class Desbravadores extends Component {
  state = {
    lista: []
  };
  async componentDidMount() {
    const data = await DB.getAll("desbravadores");
    let lista = [];
    data.forEach(doc => lista.push(doc.data()));
    this.props.setList(lista);
  }
  render() {
    return (
      <div className="ui stackable grid centered container">
        <div className="ui  row">
          <div className="ui ten wide column">
            <table className="ui table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Unidade</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                {this.props.lista.map(dbv => (
                  <tr key={"dbv-" + dbv.id}>
                    <td>{dbv.nome}</td>
                    <td>{dbv.unidade}</td>
                    <td>R${dbv.saldo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ui four wide column">
            <Transacao />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lista: state.dbvs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setList: (data) => dispatch({type: "SET_LIST", data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desbravadores);
