import React, {Component} from 'react';
import { createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";


const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Search: SearchNavigator
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);