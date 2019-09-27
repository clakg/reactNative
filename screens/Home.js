import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class Home extends Component {

    static navigationOptions = {
        drawerLabel: 'Accueil'
    };

    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            name: '',
            description: '',
            page: 1
        };
    }

    componentDidMount() {
        this.fetchCompanies();
    }

    fetchCompanies(){
        fetch(process.env.API_URL + '/companies?page=' + this.state.page) // charge la liste des companies dans le state
            .then(response => response.json())
            .then(data => this.setState({ companies: [...this.state.companies, ...data.companies] }))

        //.then(companies => this.setState({companies: [...this.state.companies, ...companies] }))
            //.then(companies => this.setState({companies: companies })) // chargement de 10 entreprises d'un coup sans charger le reste des entreprises
    }

    addCompanie() {
        const companie =  { name: this.state.name, description: this.state.description};
        this.setState({
            companies: [...this.state.companies, companie]
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                <Text>Home</Text>
                <View style={{ height: 250 }}>
                    <FlatList data={this.state.companies}
                              renderItem={({item}) => <CompanieItem companie={item}/>}
                              keyExtractor={(item, index) => index.toString()}
                    />
                    <Button onPress={() => this.setState({page: this.state.page + 1}, () => this.fetchCompanies())} title='Charger plus'/>
                </View>
                <TextInput onChangeText={text => this.setState({ name: text })}
                           value={this.state.name}
                           placeholder='Nom de la compagnie'/>
                <TextInput onChangeText={text => this.setState({ description: text })}
                           value={this.state.description}
                           keyboardType='default'/>
                <Switch value={this.state.wifi} onValueChange={value => this.setState({wifi: value}) }/>
                <Button onPress={() => this.addCompanie()} title='Ajouter une compagnie'/>
            </View>
        );
    }
}

export default Home;