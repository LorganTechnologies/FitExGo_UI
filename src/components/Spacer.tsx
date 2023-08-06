import { View, Text } from 'react-native'
import React from 'react'

interface SpacerProps {
    space?: number;
    row?: number;
}


const Spacer = ({ space, row }: SpacerProps) => {
    return (
        <View style={{ marginVertical: space && space, marginHorizontal: row && row }} />
    )
}

export default Spacer