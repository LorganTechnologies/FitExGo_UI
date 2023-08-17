import { TouchableOpacity, Image, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../res/images'
import SuperText from '../../../components/SuperText'
import { hp, wp } from '../../../res/constants'
import { colors } from '../../../res/colors'
import Spacer from '../../../components/Spacer'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { fonts } from '../../../res/fonts'
import DropDownMenu from '../../../components/DropDownMenu'
import { country, gender } from '../../../utils/data'
import RadioButton from '../../../components/RadioButton'

const Profile = (props) => {

    const [selectedCountry, setCountry] = useState();
    const [selectedCity, setCity] = useState();
    const [birth, setBirth] = useState("");
    const [selectedGender, setSelectedGender] = useState(1);
    const [overall, setOverall] = useState("Imperial");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Image source={images.back} style={styles.back} />
                    </TouchableOpacity>
                    <Spacer row={wp(2)} />
                    <SuperText value={"Profile"} medium size={wp(5)} color={colors.black} />
                </View>
                <Spacer space={wp(2)} />

                <View style={styles.profileWrapper}>
                    <Image source={images.profile} style={styles.profile} />
                    <TouchableOpacity>
                        <Image source={images.edit2} style={styles.edit} />
                    </TouchableOpacity>
                </View>

                <Input label="Full Name" />
                <Input label="FitEx user id" />
                <Input label="Email" />
                <Input label="Phone no." />
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <DropDownMenu
                        value={selectedCountry}
                        data={country}
                        setValue={(value) => { setCountry(value) }}
                        label={"Country"}
                        placeholder="Select country"
                    />
                    <DropDownMenu
                        value={selectedCity}
                        data={country}
                        setValue={(value) => { setCity(value) }}
                        label={"City"}
                        placeholder="Select City"
                    />
                </View>
                <Input value={birth} selectDate={(date) => { setBirth(moment(date).format("DD MMM, YYYY")); }} date rightIcon={images.date} label="Date of Birth" />

                <SuperText value="Age should be 18+?" regular color={colors.gray} size={wp(3.4)} />
                <Spacer space={wp(2)} />
                <DropDownMenu
                    value={selectedGender}
                    data={gender}
                    setValue={(value) => { setSelectedGender(value) }}
                    label={"Gender"}
                    placeholder="Select Gender"
                    containerStyle={{ width: null }}
                />
                <Spacer space={wp(2)} />
                <SuperText medium value={"Preferences:"} color={colors.gray} style={{ fontSize: wp(3.8) }} />
                <RadioButton onSelect={(item) => { setOverall(item) }} title="A. Overall:" options={["Imperial", "Metric"]} selected={overall} />
                <RadioButton onSelect={(item) => { setOverall(item) }} title="B. Height" options={["Feet & inches", "CM"]} selected={overall} />
                <RadioButton onSelect={(item) => { setOverall(item) }} title="C. Weight" options={["lbs", "Kg"]} selected={overall} />
                <RadioButton onSelect={(item) => { setOverall(item) }} title="D. Distance" options={["Miles", "Km"]} selected={overall} />
                <RadioButton onSelect={(item) => { setOverall(item) }} title="E. Date Format" options={["MM-Day-YYYY", "MM/DD/YYYY"]} selected={overall} />
                <Spacer space={wp(2)} />

                <TouchableOpacity style={styles.row}>
                    <Image source={images.lock} />
                    <Spacer row={wp(1)} />
                    <SuperText value="Change Password" medium color={colors.black} size={wp(3.6)} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />

                <TouchableOpacity style={styles.row}>
                    <Image source={images.logout} />
                    <Spacer row={wp(1)} />
                    <SuperText value="Logout" medium color={colors.black} size={wp(3.6)} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />
                <Button onPress={() => { props.navigation.navigate("Dashboard"); }} label="SAVE PROFILE" color={colors.white} />
                <Spacer space={hp(8)} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile