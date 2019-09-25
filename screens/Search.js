import React, {Component} from 'react';
import { View, Text, FlatList } from "react-native";
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: '',
            companies: []
        }
    }

    searchChangeText(text){
        fetch(process.env.API_URL + '/companies?search=' + text)
            .then(response => response.json())
            .then(companies => this.setState({companies: companies}))
        this.setState({search:text});
    }



    render() {
        return (
            <View>
                <Text>Search screen</Text>
                <TextInput value={this.state.search} onChangeText={text => this.searchChangeText(text)} placeholder='Votre recherche'/>
                <FlatList data={this.state.companies}
                          renderItem={({item}) => <CompanieItem companie={item}/>}
                          keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default Search;