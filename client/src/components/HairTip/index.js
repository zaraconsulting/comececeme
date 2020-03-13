import React, { Component } from 'react';

export default class HairTip extends Component {
    constructor() {
        super();

        this.state = {
            hairtips: []
        }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://js.braintreegateway.com/web/dropin/1.22.1/js/dropin.min.js";
        //For head
        document.head.appendChild(script);

        fetch('/faqs/hair-tips')
            .then(res => res.json()
            .then(data => this.setState({ hairtips: data }))
        )
    }



    render() {
        // console.log(this.state.hairtips);

        return (
            <div></div>
        )
    }
}
