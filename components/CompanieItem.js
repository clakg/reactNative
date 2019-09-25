import React, {Component} from 'react';
import { View, Text, Button } from "react-native";

class CompanieItem extends Component {
    render() {

        const {name, description} = this.props.companie;

        let button = null;
        if (typeof this.props.onClick === 'function') {
            button = <Button onPress={() => this.props.onClick()} title='Afficher'/>;
        }

        return (
            <View>
                <Text style={{ padding: 10 }}>{name}</Text>
                <Text style={{ padding: 10 }}>{description}</Text>
                {button}
            </View>
        );
    }
}

export default CompanieItem;