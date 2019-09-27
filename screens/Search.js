import React, {Component} from 'react';
import {View, Text, FlatList, Button} from "react-native";
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";
import Companie from "./Companie";

class Search extends Component {

    static navigationOptions = {
        title: 'Rechercher une entreprise'
    };


    constructor(props){
        super(props);
        this.state = {
            search: '',
            companies: [],
            page: 1
        }
    }

    searchChangeText(text){
        fetch(process.env.API_URL + '/companies?search=' + text)
            .then(response => response.json())
            .then(companies => this.setState({companies: companies}))
        this.setState({search:text});
    }

    componentDidMount() {
        this.fetchCompanies();
    }

    fetchCompanies(){
        fetch(process.env.API_URL + '/companies?page=' + this.state.page + '&search=' + this.state.search) // charge la liste des companies dans le state
            .then(response => response.json())
            //.then(companies => this.setState({companies: [...this.state.companies, ...companies] }))
        .then(companies => this.setState({companies: companies })) // chargement de 10 entreprises d'un coup sans charger le reste des entreprises
    }



    render() {
        return (
            <View>
                <Text>Search screen</Text>
                <TextInput value={this.state.search}
                           onChangeText={text => this.searchChangeText(text)}
                           placeholder='Votre recherche'/>
                <View style={{ height: 450 }}>
                    <FlatList data={this.state.companies}
                          renderItem={({item}) => <CompanieItem companie={item} onClick={() => this.props.navigation.navigate('Companie', { companie: item })}/>}
                          keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
                    <Button onPress={() => this.setState({page: this.state.page - 1}, () => this.fetchCompanies())} title='<'/>
                    <Button onPress={() => this.setState({page: this.state.page + 1}, () => this.fetchCompanies())} title='>'/>
                </View>
            </View>


        );
    }
}

export default Search;