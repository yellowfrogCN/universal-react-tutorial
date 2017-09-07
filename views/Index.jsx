import React, { Component } from 'react';

class Index extends Component {
    componentDidMount () {
        console.log('Index', this.props);
    }
    render() {
        return (
            <p>
                Current: Index
            </p>
        );
    }
}

export default Index;