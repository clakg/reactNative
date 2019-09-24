import React, {Component} from 'react';
import { View, Text } from "react-native";

class MovieItem extends Component {
    render() {

        const {title, year} = this.props.movie;

        return (
            <View>
                <Text>{title}</Text>
                <Text>{year}</Text>
            </View>
        );
    }
}

export default MovieItem;