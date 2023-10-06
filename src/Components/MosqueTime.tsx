import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { useTheme } from "@/Hooks";

const MosqueTime = () => {
    const { Gutters, Layout, Colors } = useTheme();
    return (
        <View style={[Gutters.regularVMargin]}>
            <ImageBackground borderRadius={15}
                style={[style.BackGroundImageContainer, Layout.fullWidth,
                Gutters.tinyTPadding]} source={require("../Assets/Images/timar.jpg")}>
                <View style={[Gutters.regularHMargin, Gutters.smallVMargin]}>
                    <Text style={{ color: Colors.inputBackground }}>
                        Duhar
                    </Text>
                    <Text style={[style.timingtext, { color: Colors.inputBackground }]}>
                        01:15 <Text style={[style.ampmtext]}>
                            PM
                        </Text>
                    </Text>
                </View>
                <View style={[Gutters.regularHMargin,]}>
                    <Text style={[style.nexprayertext, { color: Colors.inputBackground }]}>
                        Next Pray: <Text>
                            Asr
                        </Text>
                    </Text>
                    <Text style={[style.nextprayertimingtext, { color: Colors.inputBackground }]}>
                        05:32 <Text>
                            PM
                        </Text>
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default MosqueTime;

const style = StyleSheet.create({
    BackGroundImageContainer: {
        paddingBottom: 30
    },
    timingtext: {
        fontSize: 32,
        fontWeight: '800'
    },
    ampmtext: {
        fontSize: 12
    },
    nexprayertext: {
        fontSize: 12
    },
    nextprayertimingtext: {
        fontWeight: '700'
    }
})