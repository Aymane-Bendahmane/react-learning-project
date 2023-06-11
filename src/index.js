import React from 'react';

import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {

    state = {
        latitude: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    render() {
        return <SeasonDisplay latitude={this.state.latitude} errorMessage={this.state.errorMessage} />
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)