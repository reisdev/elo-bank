import React, { Component } from "react";
import { connect } from "react-redux";

import { Confirm } from "semantic-ui-react";

import Transacao from "./transacao";
import DB from "../../controllers/database";

const mapStateToProps = state => {
  return {
    desbravadores: state.dbvs,
    transacoes: state.trans
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setList: (origin, data) => {
      dispatch({
        type: origin === "desbravadores" ? "SET_LIST" : "SET_TRANS",
        data
      });
    },
    clearList: () => dispatch({ type: "CLEAR_LIST" })
  };
};

class TabelaGeral extends Component {
  state = { open: false, key: "", nome: "", lista: [], limit: 10 };
  open = (key, nome) => {
    this.setState({ key, nome, open: true });
  };
  close = () => this.setState({ open: false });
  remove = async () => {
    await DB.delete(this.props.node, this.state.key);
    this.close();
  };
  loadMore = () => {
    this.setState({ limit: this.state.limit + 10 }, () => {
      this.updateList();
    });
  };
  updateList = async () => {
    const data = await DB.getAll(...{
      node: this.props.node,
      order: this.props.order,
      limit : this.props.expandable ? this.state.limit : 3
    });
    let items = [];
    data.forEach(doc => items.push(doc.data()));
    this.props.setList(this.props.node, items);
  };
  render() {
    if (this.props.dados !== [])
      return (
        <div>
          <table className="ui compact table">
            <Confirm
              content={`Você tem certeza que deseja remover ${
                this.state.nome
              }?`}
              open={this.state.open}
              onCancel={this.close}
              onConfirm={this.remove}
              cancelButton="Cancelar"
              confirmButton="Confirmar"
            />
            <thead>{this.props.header}</thead>
            <tbody>
              {this.props.dados.map((item, index) => {
                let { Renderer } = this.props;
                return (
                  <tr key={this.props.node + "-" + index}>
                    <Renderer
                      {...item}
                      id={item.key}
                      index={index}
                      open={this.open}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
          { this.props.expandable && (
            <div
              className="ui left aligned primary button"
              onClick={e => this.loadMore()}
            >
              Ver mais
            </div>
          )}
        </div>
      );
    return <></>;
  }
}

const Tabela = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabelaGeral);

export { Tabela };

class Desbravadores extends Component {
  state = {
    lista: []
  };
  render() {
    return (
      <div className="ui stackable grid centered container">
        <div className="ui row">
          <div className="ui ten wide column">
            <Tabela
              node="desbravadores"
              order={"saldo"}
              dados={this.props.desbravadores}
              header={
                <tr>
                  <th className="collapsing">Posição</th>
                  <th>Desbravador</th>
                  <th className="collapsing">Unidade</th>
                  <th className="collapsing">Saldo</th>
                </tr>
              }
              Renderer={props => (
                <>
                  <td>{props.index + 1}º</td>
                  <td>{props.nome}</td>
                  <td>{props.unidade}</td>
                  <td>E${props.saldo}</td>
                </>
              )}
            />
          </div>
          <div className="ui four wide column">
            <Transacao />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Desbravadores);
