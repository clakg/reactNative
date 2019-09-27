import React, {Component} from 'react';
import { createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompanie from "../screens/NewCompanie";
import SensorNavigator from "./SensorNavigator";


const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Search: SearchNavigator,
        NewCompanie: NewCompanie,
        Sensors: SensorNavigator
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);