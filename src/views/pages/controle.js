import React, { Component } from "react";

import { connect } from "react-redux";
import { Select, Confirm } from "semantic-ui-react";
import { Tabela } from "../components/desbravadores";

import DB from "../../controllers/database";

const mapStateToProps = state => {
  return {
    desbravadores: state.dbvs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setList: data => dispatch({ type: "SET_LIST", data }),
    clearList: () => dispatch({ type: "CLEAT_LIST" })
  };
};

class RegistrarComp extends Component {
  state = {
    nome: "",
    unidade: "",
    unidades: [
      { key: "diretoria", text: "Diretoria", value: "Diretoria" },
      { key: "mercurio", text: "Mercúrio", value: "Mercúrio" },
      { key: "paladio", text: "Paládio", value: "Paládio" },
      { key: "platina", text: "Platina", value: "Platina" },
      { key: "uranio", text: "Urânio", value: "Urânio" }
    ],
    open: false
  };
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  submit = () => {
    try {
      DB.register(this.state.nome, this.state.unidade);
      this.updateList();
      this.setState({ open: false, nome: "", unidade: "" });
    } catch (error) {
      console.log(error);
    }
  };
  updateList = async () => {
    const data = await DB.getAll("desbravadores");
    let items = [];
    data.forEach(doc => items.push(doc.data()));
    this.props.setList(items);
  };
  render() {
    return (
      <div className="ui centered card">
        <Confirm
          content={`Você tem certeza que deseja registrar ${this.state.nome}?`}
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.submit}
          cancelButton="Cancelar"
          confirmButton="Confirmar"
        />
        <div className="content">Registrar Desbravador</div>
        <div className="content">
          <div className="ui form">
            <div className="ui field">
              <label>Nome</label>
              <input
                value={this.state.nome}
                onChange={e => this.setState({ nome: e.target.value })}
              />
            </div>
            <div className="ui field">
              <label>Unidade</label>
              <Select
                options={this.state.unidades}
                value={this.state.unidade}
                onChange={(e, data) => this.setState({ unidade: data.value })}
              />
            </div>
            <div className="ui primary button" onClick={this.open}>
              Registrar
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Registrar = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrarComp);

class Controle extends Component {
  state = {};
  render() {
    return (
      <div className="ui container fluid">
        <div className="ui stackable grid centered container">
          <div className="ui row">
            <div className="ui ten wide column">
              <Tabela admin={true} />
            </div>
            <div className="ui four wide column">
              <Registrar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controle);
