import { View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style';
import SuperText from '../../../components/SuperText';
import { colors } from '../../../res/colors';
import { wp } from '../../../res/constants';
import { images } from '../../../res/images';
import Spacer from '../../../components/Spacer';
import { groups } from '../../../utils/data';

const Groups = ({ onEdit, props, onDetail }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.groupWrapper}>
                <View style={styles.row}>
                    <Image source={images.profile} style={styles.profile} />
                    <TouchableOpacity onPress={onDetail} style={{ width: item.isAdmin ? wp(50) : wp(40) }}>
                        <SuperText value="Fitness Group 1" regular color={colors.black} size={wp(4)} />
                        {item.isAdmin &&
                            <View style={[styles.row, { justifyContent: 'flex-start', marginTop: wp(2) }]}>
                                <View style={styles.membersWrapper}>
                                    <Image source={images.profile} style={styles.membersImg} />
                                </View>
                                <View style={[styles.membersWrapper, { marginLeft: -wp(2) }]}>
                                    <Image source={images.profile} style={styles.membersImg} />
                                </View>
                                <View style={[styles.membersWrapper, { marginLeft: -wp(2) }]}>
                                    <Image source={images.profile} style={styles.membersImg} />
                                    <SuperText style={{ position: 'absolute', }} value="+5" color={colors.white} regular size={wp(3)} />
                                </View>
                            </View>
                        }
                    </TouchableOpacity>
                    {item.isAdmin ?
                        <>
                            <TouchableOpacity onPress={onEdit}>
                                <Image source={images.edit} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={images.delete} />
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                <View style={styles.membersWrapper}>
                                    <Image source={images.profile} style={styles.membersImg} />
                                </View>
                                <View style={[styles.membersWrapper, { marginLeft: -wp(2) }]}>
                                    <Image source={images.profile} style={styles.membersImg} />
                                </View>
                                <View style={[styles.membersWrapper, { marginLeft: -wp(2) }]}>
                                    <Image source={images.profile} style={styles.membersImg} />
                                    <SuperText style={{ position: 'absolute', }} value="+5" color={colors.white} regular size={wp(3)} />
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={images.exit} />
                            </TouchableOpacity>
                        </>
                    }
                </View>
                <Spacer space={wp(1.5)} />
                <SuperText value="Invite Link" color={colors.black} regular size={wp(4)} />
                <Spacer space={wp(0.5)} />
                <View style={[styles.row, styles.linkWrapper]}>
                    <SuperText numberOfLines={1} style={{ padding: wp(2), width: wp(75) }} value="https://www.figma.com/filegOUIiPUQimoicqRJS4j9sj" regular color={colors.black} size={wp(3)} />
                    <TouchableOpacity>
                        <Image source={images.copy} style={styles.copy} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Spacer space={wp(1)} />
            <View style={styles.row}>
                <SuperText value="My Groups" color={colors.black2} size={wp(4.5)} semiBold />
                <TouchableOpacity onPress={() => { props.navigation.navigate("CreateGroup"); }}>
                    <Image source={images.addBtn} />
                </TouchableOpacity>
            </View>
            <Spacer space={wp(1)} />

            <FlatList data={groups} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Groups;