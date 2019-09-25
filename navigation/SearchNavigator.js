import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";
import CompanieScreen from "../screens/Companie";

const SearchNavigator = {
    Search: SearchScreen,
    Companie: CompanieScreen
};

export default createStackNavigator(SearchNavigator);