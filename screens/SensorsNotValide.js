// creation d'un nouvelle onglet Sensors.js

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Accelerometer, Gyroscope} from 'expo-sensors';
import SensorItem from "../components/SensorItem";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

class SensorsNotValide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accelerometerData: {}, // objet .x .y .z = data = null
            gyroscopeData: {}
        };
    }

    // on accede à l'acceleration en l'ecoutant en mettant à jour le state
    componentDidMount() {
        Accelerometer.setUpdateInterval(100);
        Gyroscope.setUpdateInterval(100);
        this._accelerometerSubscription = Accelerometer.addListener(data => this.setState({ accelerometerData: data }))
        this._gyroscopeSubscription = Gyroscope.addListener(data => this.setState({ gyroscopeData: data }))

        Permissions.askAsync(Permissions.LOCATION) // recupere le statut de l'objet qui est envoyé
            .then(({status}) => {
                Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation
                })
                    .then(location => this.setState({ location: location   }))
            })

    }

    //quand composant supprimé , + reinitialisation
    componentWillUnmount() {
        this._accelerometerSubscription && this._accelerometerSubscription.remove();
        this._accelerometerSubscription = null;
        this._gyroscopeSubscription && this._gyroscopeSubscription.remove();
        this._gyroscopeSubscription = null;
    }

    render() {

        let location = <Text>Waiting...</Text>;
        if (this.state.location) {
            const {latitude, longitude, accuracy} = this.state.location.coords;
            location = (
                <View>
                    <Text>Latitude : {latitude}</Text>
                    <Text>Longitude : {longitude}</Text>
                    <Text>Accuracy : {accuracy}</Text>
                </View>
            );
        }

        return (
            <View>
                <Text>Accelerometer :</Text>
                <SensorItem data={this.state.accelerometerData}/>
                <Text>Gyroscope :</Text>
                <SensorItem data={this.state.gyroscopeData}/>
                <Text>Location :</Text>
                {location}
            </View>
        );
    }
}

export default SensorsNotValide;