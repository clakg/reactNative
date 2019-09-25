import React, {Component} from 'react';
import { View, Text } from "react-native";

class CompanieItem extends Component {
    render() {

        const {name, description} = this.props.companie;

        return (
            <View>
                <Text>{name}</Text>
                <Text>{description}</Text>
            </View>
        );
    }
}

export default CompanieItem;