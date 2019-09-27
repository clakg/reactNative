import React, {Component} from 'react';
import { createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewCompanie from "../screens/NewCompanie";
import Sensors from "../screens/Sensors";


const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Search: SearchNavigator,
        NewCompanie: NewCompanie,
        Sensors: Sensors
    },
    {
        initialRouteName: 'Sensors'
    }
);

export default createAppContainer(AppNavigator);