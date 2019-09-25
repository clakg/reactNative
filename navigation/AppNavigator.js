import React, {Component} from 'react';
import { createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompanie from "../screens/NewCompanie";


const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Search: SearchNavigator,
        NewCompanie: NewCompanie
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);