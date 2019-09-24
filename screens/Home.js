import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native';
import MovieItem from '../components/MovieItem';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState({
            movies: [
                { title: 'Titanic', year: 1998 },
                { title: 'Intouchables', year: 2015 }
            ]
        });
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
                <FlatList data={this.state.movies}
                          renderItem={({item}) => <MovieItem movie={item}/>}
                          keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default Home;