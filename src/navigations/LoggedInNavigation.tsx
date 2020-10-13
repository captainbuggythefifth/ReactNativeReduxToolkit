import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Counter from "components/molecules/Counter";
import SwitchTheme from "components/molecules/SwitchTheme";
import LanguagePicker from "components/molecules/LanguagePicker";

const Tab = createBottomTabNavigator();

const LoggedInNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Counter"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case "Counter":
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                                break;
                            case "Theme":
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                                break;
                            case "Language":
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                                break;
                            default:
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Counter" component={Counter} />
                <Tab.Screen name="Theme" component={SwitchTheme} />
                <Tab.Screen name="Language" component={LanguagePicker} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default LoggedInNavigation