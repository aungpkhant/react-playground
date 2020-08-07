import React, { Component } from "react";

export default class ThisBinding extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        // this.setState((state) => ({
        //     isToggleOn: !state.isToggleOn,
        // }));
    }

    render() {
        return (
            <button onClick={this.handleClick()}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        );
    }
}
