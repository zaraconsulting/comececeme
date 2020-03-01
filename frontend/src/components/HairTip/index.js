import React, { Component } from 'react'

export default class HairTip extends Component {
    constructor() {
        super();

        this.state = {
            hairtips: []
        }
    }

    componentDidMount() {
        fetch('/faqs/hair-tips')
            .then(res => res.json()
            .then(data => this.setState({ hairtips: data.tips }))
        )
    }

    render() {
        console.log(this.state.hairtips);

        return (
            <div></div>
        )
    }
}
