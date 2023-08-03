import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style';
import { images } from '../../../res/images';
import SuperText from '../../../components/SuperText';
import { colors } from '../../../res/colors';
import { hp, wp } from '../../../res/constants';
import Spacer from '../../../components/Spacer';
import { users } from '../../../utils/data';

const EditGroup = (props) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.tableRow}>
                <SuperText value="1" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(25), }} value={item.name} regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(18) }} value="FU1011" regular size={wp(3.5)} color={colors.black2} />
                <View style={[styles.row, { width: wp(20) }]}>
                    <TouchableOpacity>
                        <Image source={images.close} />
                    </TouchableOpacity>
                    <Spacer row={wp(1)} />
                    <TouchableOpacity>
                        <Image source={images.check} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderExistingUsers = ({ item }) => {
        return (
            <View style={styles.tableRow}>
                <SuperText value="1" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(25), }} value={item.name} regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(18) }} value="FU1011" regular size={wp(3.5)} color={colors.black2} />
                <View style={[styles.row, { width: wp(20) }]}>
                    <TouchableOpacity>
                        <Image source={images.userRemove} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={[styles.row, { padding: wp(2) }]}>
                <TouchableOpacity onPress={props.onBack} style={{ padding: wp(2) }}>
                    <Image source={images.left} />
                </TouchableOpacity>
                <View>
                    <SuperText value="Fitness Group 1" color={colors.black2} size={wp(4)} semiBold />
                    <SuperText value="5 members" color={colors.gray5} size={wp(3.5)} regular />
                </View>
            </View>
            <Spacer space={wp(1)} />
            <View style={styles.linkWrapper}>
                <View style={styles.inviteLink}>
                    <SuperText value="Invite Link" color={colors.white} medium size={wp(4)} />
                </View>
                <SuperText numberOfLines={1} style={{ width: wp(60), padding: wp(2) }} value="https://www.figma.com/file-and asdads dss" color={colors.black} regular size={wp(3.5)} />
            </View>

            <SuperText style={{ padding: wp(4) }} value="Pending Requests" color={colors.black2} semiBold size={wp(4)} />
            <View style={styles.tableHeader}>
                <SuperText value="#" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(25), }} value="Name" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(18) }} value="User Id" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(20) }} value="Actions" regular size={wp(3.5)} color={colors.black2} />
            </View>
            <Spacer space={wp(1)} />
            <FlatList data={users} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />

            <SuperText style={{ padding: wp(4) }} value="Existing Users" color={colors.black2} semiBold size={wp(4)} />
            <View style={styles.tableHeader}>
                <SuperText value="#" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(25), }} value="Name" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(18) }} value="User Id" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(20) }} value="Actions" regular size={wp(3.5)} color={colors.black2} />
            </View>
            <Spacer space={wp(1)} />
            <FlatList data={users} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}
                renderItem={renderExistingUsers}
            />
            <Spacer space={hp(2)} />
        </View>
    )
}

export default EditGroup;