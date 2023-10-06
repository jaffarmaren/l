import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "@/Hooks";

const LocationComponent = () => {
    const { Gutters, Layout } = useTheme();
    return (
        <View style={[Gutters.regularTMargin, Layout.justifyContentBetween, Layout.rowHCenter]}>
            <View>
                <Text style={[style.headingtext, Gutters.tinyHPadding]}>
                    Your Location
                </Text>
                <Text style={[style.headingtext, Gutters.tinyHPadding]}>
                    Green Campus, Central university, hyderabad
                </Text>
            </View>
            <View>
                <Image style={[style.profileimage]} source={require("../Assets/Images/profile.jpg")} />
            </View>
        </View>
    )
}
export default LocationComponent;

const style = StyleSheet.create({
    headingtext: {
        color: 'black',
        flexWrap: 'wrap'
    },
    secondheadingtext: {
        color: 'green',
        fontWeight: '500',
        textShadowColor: 'green',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0.5
    },
    profileimage: {
        height: 25,
        width: 28,
        borderRadius: 100
    }
})