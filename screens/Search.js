import React, {Component} from 'react';
import { View, Text, FlatList, Button } from "react-native";
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class Search extends Component {

    static navigationOptions = {
        title: 'Rechercher une entreprise'
    };

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            page: 1,
            companies: [],
            count: 0,
            limit: 1
        }
    }

    searchChangeText(text) {
        this.setState({ search: text }, () => this.fetchCompanies());
    }

    searchChangePage(change) {
        this.setState({ page: this.state.page + change }, () => this.fetchCompanies());
    }

    fetchCompanies() {
        fetch(process.env.API_URL + '/companies?search=' + this.state.search + '&page=' + this.state.page)
            .then(response => response.json())
            .then(data => this.setState({ companies: data.companies, count: data.count, limit: data.limit }))
    }

    render() {
        return (
            <View>
                <Text>Search Screen</Text>
                <TextInput value={this.state.search} onChangeText={text => this.searchChangeText(text)} placeholder='Votre recherche'/>
                <View style={{ height: 250 }}>
                    <FlatList data={this.state.companies}
                              renderItem={({item}) => <CompanieItem companie={item} onClick={() => this.props.navigation.navigate('Companie', { companie: item })}/>}
                              keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button onPress={() => this.searchChangePage(-1)}
                            title='<'
                            disabled={this.state.page === 1}/>
                    <Button onPress={() => this.searchChangePage(1)}
                            title='>'
                            disabled={(this.state.page * this.state.limit) >= this.state.count}
                    />
                </View>
            </View>
        );
    }
}

export default Search;