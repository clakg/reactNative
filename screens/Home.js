import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import CompanieItem from "../components/CompanieItem";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            name: '',
            description: ''
        };
    }



    componentDidMount() {
        this.fetchCompanies();
    }

    fetchCompanies(){
        console.log(process.env.API_URL + '/companies')
        fetch(process.env.API_URL + '/companies') // charge la liste des companies dans le state
            .then(response => response.json())
            .then(companies => this.setState({companies: [...this.state.companies, ...companies] }))
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