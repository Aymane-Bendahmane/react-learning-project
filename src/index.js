import React from 'react';

import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null , 
            errorMessage :''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude : position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
        )

    }

    render() {
        return <div>latitude : {this.state?.latitude} <br></br> {this.state.errorMessage} </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)