import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import Dashboard from '../screens/app/dashboard';
import CreateGroup from '../screens/app/createGroup';
const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="CreateGroup" component={CreateGroup} />
        </Stack.Navigator>
    )
}