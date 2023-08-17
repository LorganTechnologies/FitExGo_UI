import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../res/colors';
import { hp, wp } from '../res/constants';
import { images } from '../res/images';
import Dashboard from '../screens/app/dashboard';
import SuperText from '../components/SuperText';

const Tab = createBottomTabNavigator();

export default function BottomNavigation(props: any) {
    const options = {
        headerShown: false,
        tabBarStyle: styles.tab,
    }
    return (
        <View style={styles.container}>
            <Tab.Navigator screenOptions={options}>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', }}>
                            <Image source={images.fit} style={[styles.icon, focused && { tintColor: colors.primary }]} />
                            <SuperText value="Fit" regular size={wp(3.8)} color={focused ? colors.primary : colors.black} />
                        </View>
                    ),
                }} name="Home" component={Dashboard} />
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', }}>
                            <Image source={images.explore} style={[styles.icon, focused && { tintColor: colors.primary }]} />
                            <SuperText value="Explore" regular size={wp(3.8)} color={focused ? colors.primary : colors.black} />
                        </View>
                    ),
                }} name="History" component={Dashboard} />
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', }}>
                            <Image source={images.pinGo} style={[styles.icon, focused && { tintColor: colors.primary }]} />
                            <SuperText value="Go" regular size={wp(3.8)} color={focused ? colors.primary : colors.black} />
                        </View>
                    ),
                }} name="Add" component={Dashboard} />
            </Tab.Navigator>
            <View style={{ alignItems: "center", marginVertical: wp(3) }}>
                <SuperText value="Ads" regular size={wp(4.5)} color={colors.red} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    tab: {
        height: hp(8),
        borderTopWidth: 1,
        elevation: 0
        // width: wp(90),
        // alignSelf: 'center',
        // bottom: wp(4),
        // borderRadius: wp(8)
    },
    icon: {
        width: wp(7),
        height: wp(7),
        resizeMode: 'contain',
        tintColor: colors.black
    }
})