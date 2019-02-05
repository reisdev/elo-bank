import React, { Component } from "react";
import { connect } from "react-redux";

import { Confirm } from "semantic-ui-react";

import Transacao from "./transacao";
import DB from "../../controllers/database";

export class TabelaDesbravadores extends Component {
  state = { open: false, key: "", nome: "" };
  open = (key, nome) => {
    this.setState({ key, nome, open: true });
  };
  close = () => this.setState({ open: false });
  async componentDidMount() {
    this.props.clearList();
    this.updateList();
  }
  updateList = async () => {
    const data = await DB.getAll("desbravadores");
    let lista = [];
    data.forEach(doc => lista.push({ key: doc.id, ...doc.data() }));
    this.props.setList(lista);
  };
  remove = async () => {
    await DB.delete("desbravadores", this.state.key);
    this.updateList();
    this.close();
  };
  render() {
    return (
      <table className="ui table">
        <Confirm
          content={`Você tem certeza que deseja remover ${this.state.nome}?`}
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.remove}
          cancelButton="Cancelar"
          confirmButton="Confirmar"
        />
        <thead>
          <tr>
            <th>Nome</th>
            <th>Unidade</th>
            <th>Saldo</th>
            {this.props.admin && <th />}
          </tr>
        </thead>
        <tbody>
          {this.props.lista.map(dbv => {
            return (
              <tr key={"dbv-" + dbv.key}>
                <td>{dbv.nome}</td>
                <td>{dbv.unidade}</td>
                <td>R${dbv.saldo}</td>
                {this.props.admin && (
                  <td>
                    <div
                      onClick={e => this.open(dbv.key, dbv.nome)}
                      className="ui red icon button"
                    >
                      <i className="icon close" />
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class Desbravadores extends Component {
  state = {
    lista: []
  };
  render() {
    return (
      <div className="ui stackable grid centered container">
        <div className="ui row">
          <div className="ui ten wide column">
            <Tabela />
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setList: data => dispatch({ type: "SET_LIST", data }),
    clearList: () => dispatch({ type: "CLEAR_LIST" })
  };
};

const Tabela = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabelaDesbravadores);

export { Tabela };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Desbravadores);
