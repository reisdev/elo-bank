import React, { Component } from "react";
import { connect } from "react-redux";

import Desbravadores from "../components/desbravadores"

class Inicial extends Component {
  render() {
    return (
      <div className="ui container fluid">
        <Desbravadores></Desbravadores>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Inicial);
