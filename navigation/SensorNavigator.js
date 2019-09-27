import { createBottomTabNavigator } from "react-navigation-tabs";
import Accelerometer from "../screens/sensors/Accelerometer";
import Gyroscope from "../screens/sensors/Gyroscope";
import Location from "../screens/sensors/Location";
import MyImagePicker from "../screens/sensors/MyImagePicker";

const SensorNavigator = {
    Accelerometer: Accelerometer,
    Gyroscope: Gyroscope,
    Location: Location,
    MyImagePicker: MyImagePicker
};

export default createBottomTabNavigator(SensorNavigator);

