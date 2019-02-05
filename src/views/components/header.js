import React, { Component } from 'react';

class Menu extends Component {
    render(){
        return (
            <div className="ui top fixed inverted primary menu">
                <a className="item" href="#/">Inicial</a>
                <a className="item" href="#/controle">Controle</a>
            </div>
        )
    }
}

export default Menu