import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { global } from '../res/global'

const SuperText = ({ numberOfLines, value, style, bold, regular, medium, semiBold, color, size, light, mSemiBold, rRegular }: any) => {
    return (
        <Text numberOfLines={numberOfLines} style={[bold && global.bold, mSemiBold && global.mSemiBold, regular && global.regular, light && global.light, medium && global.medium, semiBold && global.semiBold, color && { color: color }, size && { fontSize: size }, style,]}>{value}</Text>
    )
}

export default SuperText