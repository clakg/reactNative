import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Accelerometer, Gyroscope} from 'expo-sensors';
import SensorItem from "../components/SensorItem";

class Sensors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accelerometerData: {},
            gyroscopeData: {}
        };
    }

    componentDidMount() {
        Accelerometer.setUpdateInterval(100);
        Gyroscope.setUpdateInterval(100);
        this._accelerometerSubscription = Accelerometer.addListener(data => this.setState({ accelerometerData: data }))
        this._gyroscopeSubscription = Gyroscope.addListener(data => this.setState({ gyroscopeData: data }))
    }

    componentWillUnmount() {
        this._accelerometerSubscription && this._accelerometerSubscription.remove();
        this._accelerometerSubscription = null;
        this._gyroscopeSubscription && this._gyroscopeSubscription.remove();
        this._gyroscopeSubscription = null;
    }

    render() {
        return (
            <View>
                <Text>Accelerometer :</Text>
                <SensorItem data={this.state.accelerometerData}/>
                <Text>Gyroscope :</Text>
                <SensorItem data={this.state.gyroscopeData}/>
            </View>
        );
    }
}

export default Sensors;