import React, {Component} from 'react';
import {View, TextInput, Button} from "react-native";

class NewCompanie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    saveCompanie() {
        fetch(process.env.API_URL + '/companies', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.name })
        })
    }
    // .then + .then + .catch pour dire à l'utilisateur que c'est bien enregistrée


    render() {
        return (
            <View>
                <TextInput value={this.state.name} onChangeText={text => this.setState({ name: text })} placeholder="Nom de l'entreprise"/>
                <Button onPress={() => this.saveCompanie()} title='Enregistrer'/>
            </View>
        );
    }
}

export default NewCompanie;