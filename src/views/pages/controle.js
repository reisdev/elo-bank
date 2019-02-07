import React, { Component } from "react";

import { connect } from "react-redux";
import { Select, Confirm, Tab } from "semantic-ui-react";
import { Tabela } from "../components/desbravadores";
import Transacao from "../components/transacao";

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

class RegistrarComp extends Component {
  state = {
    nome: "",
    unidade: "",
    unidades: [
      { key: "diretoria", text: "Diretoria", value: "Diretoria" },
      { key: "mercurio", text: "Mercúrio", value: "Mercúrio" },
      { key: "paladio", text: "Paládio", value: "Paládio" },
      { key: "platina", text: "Platina", value: "Platina" },
      { key: "uranio", text: "Urânio", value: "Urânio" },
      { key: "titanio", text: "Titânio", value: "Titânio"}
    ],
    open: false
  };
  open = e => {
    e.preventDefault();
    this.setState({ open: true });
  };
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
    const data = await DB.getAll("desbravadores", "saldo");
    let items = [];
    data.forEach(doc => items.push(doc.data()));
    this.props.setList("desbravadores", items);
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
            <form onSubmit={this.open}>
              <div className="ui field">
                <label>Nome</label>
                <input
                  required
                  value={this.state.nome}
                  onChange={e => this.setState({ nome: e.target.value })}
                />
              </div>
              <div className="ui field">
                <label>Unidade</label>
                <Select
                  required
                  options={this.state.unidades}
                  value={this.state.unidade}
                  onChange={(e, data) => this.setState({ unidade: data.value })}
                />
              </div>
              <button className="ui primary button">Registrar</button>
            </form>
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
  componentDidMount() {
    this.updateList();
  }
  updateList = async () => {
    const data = await DB.getAll("desbravadores", "saldo", this.state.limit);
    const data2 = await DB.getAll("transacoes", "data", this.state.limit);
    let items = [],
      items2 = [];
    data.forEach(doc => items.push({ key: doc.id, ...doc.data() }));
    data2.forEach(doc => items2.push({ key: doc.id, ...doc.data() }));
    this.props.setList("desbravadores", items);
    this.props.setList("transacoes", items2);
  };
  state = {};
  panes = [
    {
      menuItem: "Desbravadores",
      render: () => {
        return (
          <div className="ui centered stackable grid container">
            <div className="ui row">
              <div className="ui ten wide column">
                <Tabela
                  dados={this.props.desbravadores}
                  node={"desbravadores"}
                  order={"saldo"}
                  expandable={true}
                  header={
                    <tr>
                      <th className="collapsing">Posição</th>
                      <th>Desbravador</th>
                      <th className="collapsing">Unidade</th>
                      <th className="collapsing">Saldo</th>
                      <th className="collapsing" />
                    </tr>
                  }
                  Renderer={props => (
                    <>
                      <td>{props.index + 1}º</td>
                      <td>{props.nome}</td>
                      <td>{props.unidade}</td>
                      <td>E${props.saldo}</td>
                      <td>
                        <div
                          onClick={e => props.open(props.id, props.nome)}
                          className="ui red icon button"
                        >
                          <i className="icon close" />
                        </div>
                      </td>
                    </>
                  )}
                />
              </div>
              <div className="ui four wide column">
                <Registrar />
              </div>
            </div>
          </div>
        );
      }
    },
    {
      menuItem: "Transações",
      active: true,
      render: () => {
        return (
          <div className="ui centered stackable grid container">
            <div className="ui row">
              <div className="ui ten wide column">
                <Tabela
                  node={"transacoes"}
                  order={"data"}
                  expandable={true}
                  dados={this.props.transacoes}
                  header={
                    <tr>
                      <th className="collapsing">Índice</th>
                      <th>Desbravador</th>
                      <th className="collapsing">Data</th>
                      <th className="collapsing">Tipo</th>
                      <th className="collapsing">Valor</th>
                    </tr>
                  }
                  Renderer={props => {
                    return (
                      <>
                        <td>{props.index + 1}</td>
                        <td>{props.desbravador}</td>
                        <td>
                          {new Date(props.data.toMillis()).toLocaleDateString(
                            "pt"
                          )}
                        </td>
                        <td>
                          {props.tipo === "credito" ? "Crédito" : "Débito"}
                        </td>
                        <td>E${props.valor}</td>
                      </>
                    );
                  }}
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
  ];
  render() {
    return (
      <div className="ui container fluid">
        <Tab panes={this.panes} menu={{ secondary: true, pointing: true }} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controle);
