import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import SignUpScreen from 'screens/SignUpScreen';

const Stack = createStackNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

const NotLoggedInNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="SignUp"
                headerMode="none"
            >
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default NotLoggedInNavigation