import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/app/dashboard';
import CreateGroup from '../screens/app/createGroup';
import Profile from '../screens/app/profile';
import Rewards from '../screens/app/rewards';
import MarketPlace from '../screens/app/marketPlace';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="CreateGroup" component={CreateGroup} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Rewards" component={Rewards} />
            <Stack.Screen name="MarketPlace" component={MarketPlace} />
        </Stack.Navigator>
    )
}