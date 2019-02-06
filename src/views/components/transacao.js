import React, { Component } from "react";

import DB from "../../controllers/database";
import { Select } from "semantic-ui-react";
import { connect } from "react-redux";

class Transacao extends Component {
  state = {
    desbravadores: [],
    options: []
  };
  async componentDidMount() {
    await this.updateList();
    this.getOptions();
  }
  getOptions = e => {
    const options = this.props.desbravadores.map(dbv => {
      return {
        key: dbv.key,
        text: dbv.nome,
        value: dbv.key
      };
    });
    this.setState({ options });
  };
  submit = async (e) => {
    e.preventDefault()
    try {
      const { id, tipo, valor } = this.state;
      await DB.updateSaldo(id, tipo, valor);
      this.setState({ id: 0, tipo: "", valor: "" });
      this.updateList();
    } catch (error) {
      console.log(error);
    }
  };
  updateList = async () => {
    const data = await DB.getAll("desbravadores","saldo");
    const data2 = await DB.getAll("transacoes","data");
    let lista = [];
    let lista2 = [];
    data.forEach(doc => lista.push({ key: doc.id, ...doc.data() }));
    data2.forEach(doc => lista2.push({ key: doc.id, ...doc.data() }));
    this.props.setList("desbravadores",lista);
    this.props.setList("transacoes",lista2);
  };
  render() {
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="title">Nova transação</div>
        </div>
        <div className="content">
          <div className="ui form">
            <form onSubmit={this.submit}>
              <div className="ui field">
                <label>Desbravador</label>
                <Select
                  selection
                  options={this.state.options}
                  onChange={(e, data) => this.setState({ id: data.value })}
                  value={this.state.id}
                />
              </div>
              <div className="ui field">
                <label>Tipo</label>
                <Select
                  selection
                  options={[
                    { key: "credito", text: "Crédito", value: "credito" },
                    { key: "debito", text: "Débito", value: "debito" }
                  ]}
                  onChange={(e, data) => this.setState({ tipo: data.value })}
                  value={this.state.tipo}
                />
              </div>
              <div className="ui field">
                <label>Valor</label>
                <input
                  type="number"
                  onChange={e => {
                    this.setState({ valor: e.target.value });
                  }}
                  value={this.state.valor}
                />
              </div>
              <button className="ui primary button">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setList: (node,data) => dispatch({ type: node === "desbravadores" ? "SET_LIST" : "SET_TRANS", data }),
    clearList: () => dispatch({ type: "CLEAR_LIST" })
  };
};

const mapStateToProps = state => {
  return {
    desbravadores: state.dbvs
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transacao);
