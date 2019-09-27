import { createStackNavigator } from "react-navigation-tabs";
import SearchScreen from "../screens/Search";
import CompanyScreen from "../screens/Companie";
import EditCompany from "../screens/EditCompanie";

const SearchNavigator = {
    Search: SearchScreen,
    Company: CompanyScreen,
    EditCompany: EditCompany
};

export default createTabNavigator(SensorNavigator);

