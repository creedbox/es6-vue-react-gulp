import React from 'react';

class Hello extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: 'This is react',
        };
    }
    render () {
        return <h2>{this.state.title}</h2>;
    }
}

export default Hello;
