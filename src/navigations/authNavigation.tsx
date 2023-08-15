import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signUp';
import AppNavigation from './appNavigation';
import ForgotPassword from '../screens/app/forgotPassword';
import ChangePassword from '../screens/app/changePassword';
import BottomNavigation from './bottomNavigation';
const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="AppNavigation" component={AppNavigation} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    )
}