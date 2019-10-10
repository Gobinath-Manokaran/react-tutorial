import React from 'react';
import Car from './Car.js';

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <div style={{paddingLeft:'35%'}}>
                    <Car color="red" brand="maruti"/>
                    <Car color="blue"/>
                    <Car color="black"/>
                </div>
            </div>
        );
    }
}
export default Garage;