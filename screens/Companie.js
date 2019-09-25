import React, {Component} from 'react';
import { View, Text } from "react-native";

class Companie extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('companie').name
        }
    };

    render() {

        const companie = this.props.navigation.getParam('companie');


        return (
            <View>

                <Text style={{ padding: 10 }}>{companie.description}</Text>
            </View>
        );
    }
}

export default Companie;