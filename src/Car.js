import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false
        };
    }
    componentDidMount() {
        console.log('Before Mount.....')
    }

    render() {
        return (
            <div style={{borderStyle: 'solid', width:'40%', marginBottom:'2%', borderColor: this.props.color}}>
                <h2 style={{color: this.props.color}}>Hi, I am a {this.props.color} {this.props.brand} Car!</h2>
                <button style={{color: this.props.color, height:'30px', width:'30%'}} onClick={this.setEngineState}>{this.state.running  ? 'Stop' : 'Start'}</button>
                <h3>{this.state.running? 'Vroom! Vroom!' : 'I am ready to start'}</h3>
            </div>

        );

    }
    setEngineState = () => {
        this.setState({running: !this.state.running});
    }
}

export default Car;