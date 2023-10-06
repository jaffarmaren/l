import React from "react";
import { View, Pressable, Animated, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from "@/Hooks";
const BottomDesignNavi = ({ state, navigation }: any) => {
    const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
    const homehandler = () => {
        navigation.navigate("Home");
    }
    const favouritehandler = () => {
        navigation.navigate("Favourite");
    }
    const locationhandler = () => {
        navigation.navigate("Location");
    }
    const profilehandler = () => {
        navigation.navigate("Profile");
    }
    return (
        <View style={[Gutters.smallTPadding,Gutters.smallBPadding,Gutters.smallHPadding, Layout.justifyContentCenter,{backgroundColor: Colors.inputBackground}]}>
            <View style={[Layout.justifyContentAround, Layout.row]}>
                <Pressable onPress={() => homehandler()} 
                style={[style.pressablecontainer, Gutters.smallHPadding, Gutters.smallRPadding,Gutters.largeBPadding, Gutters.tinyBPadding, Gutters.tinyVPadding, { backgroundColor: state.index === 0 ? "#d0efff" : Colors.inputBackground },
                Layout.alignItemsCenter,Layout.row]}>
                    {
                        state.index === 0 ? (
                            <>
                                <Icon name="home" size={24} color="#2a9df4" />
                                <Animated.Text style={[style.texts]}>
                                    Home
                                </Animated.Text>
                            </>
                        ) : (
                            <Icon name="home" size={24} color="#bebebe" />
                        )
                    }
                </Pressable>
                <Pressable onPress={() => favouritehandler()} 
                style={[style.pressablecontainer,Gutters.smallHPadding, Gutters.smallRPadding,Gutters.largeBPadding, Gutters.tinyBPadding, Gutters.tinyVPadding, { backgroundColor: state.index === 1 ? "#d0efff" : Colors.inputBackground },
                Layout.alignItemsCenter,Layout.row]}>
                    {
                        state.index === 1 ? (
                            <>
                                <Icon name="heart" size={24} color="#2a9df4" />
                                <Animated.Text style={[style.texts]} >
                                    Favorite
                                </Animated.Text>
                            </>
                        ) : (
                            <Icon name="heart" size={24} color="#bebebe" />
                        )
                    }
                </Pressable>
                <Pressable onPress={() => locationhandler()} 
                style={[style.pressablecontainer,Gutters.smallHPadding, Gutters.smallRPadding,Gutters.largeBPadding, Gutters.tinyBPadding, Gutters.tinyVPadding, { paddingHorizontal: 15, backgroundColor: state.index === 2 ? "#d0efff" : Colors.inputBackground },
                Layout.alignItemsCenter,Layout.row]}>
                    {
                        state.index === 2 ? (
                            <>
                                <Icon name="location-pin" size={24} color="#2a9df4" />

                                <Animated.Text style={[style.texts]}>
                                    Location
                                </Animated.Text>
                            </>
                        ) : (
                            <Icon name="location-pin" size={24} color="#bebebe" />
                        )
                    }
                </Pressable>
                <Pressable onPress={() => profilehandler()} 
                style={[style.pressablecontainer,Gutters.smallHPadding, Gutters.smallRPadding,Gutters.largeBPadding, Gutters.tinyBPadding, Gutters.tinyVPadding, { backgroundColor: state.index === 3 ? "#d0efff" : Colors.inputBackground },
                Layout.alignItemsCenter,Layout.row]}>
                    {
                        state.index === 3 ? (
                            <>
                                <Icon2 name="account" size={24} color="#2a9df4" />

                                <Animated.Text style={[style.texts]}>
                                    Account
                                </Animated.Text>
                            </>
                        ) : (
                            <Icon2 name="account" size={24} color="#bebebe" />
                        )
                    }
                </Pressable>
            </View>
        </View>
    )
}
export default BottomDesignNavi;

const style = StyleSheet.create({
    pressablecontainer: {
        borderRadius: 5,
        gap: 5,
        
    },
    texts: {
        color: '#2a9df4',
        fontWeight: '500',

    }
})