import React, { Component } from 'react';

export default class Braintree extends Component {
    constructor() {
        super();

        this.state = {
            clientToken: ''
        };
    }

    fetchToken = () => {
        fetch('/shop/client_token')
            .then(res => res.json())
            .then(data => {
                this.setState({ clientToken: data });
                // return data;
            });
    }

    render() {
        console.log(`Client Token: ${this.state.clientToken}`);

        return (
            <div>

            </div>
        )
    }
}
