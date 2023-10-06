import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6"
import { View, Text, Image, FlatList, Pressable, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/Hooks";
const MosqueList = (props: any) => {
    const { Gutters, Layout } = useTheme();
    const navigation = useNavigation();
    const Navigatehandler = () => {
        navigation.navigate("Favourite");
    }
    return (
        <View style={[Gutters.smallVMargin]}>
            {
                props.title && props.navi ? (
                    <View style={[Gutters.smallTMargin, Gutters.smallHMargin, Layout.row, Layout.justifyContentBetween]}>
                        <Text style={[style.titletext]}>
                            {props.title}
                        </Text>
                        <Pressable onPress={Navigatehandler} style={[Layout.justifyContentCenter]}>
                            <Text style={[style.pressabletext]}>
                                {props.navi}
                            </Text>
                        </Pressable>
                    </View>
                ) : ("")
            }
            <FlatList
                data={props.mosquesdata}
                horizontal={false}
                numColumns={2}
                initialNumToRender={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <>
                        {index < props.length ? <View style={[style.cardcontainer, Gutters.tinyHMargin, Layout.rowVCenter, Gutters.regularTMargin]}>
                            <View style={[style.cards]}>
                                <View>
                                    <ImageBackground borderRadius={20} style={[style.backgroundimagecontainer]} source={require("../Assets/Images/m1.jpg")}>
                                        <View style={[style.iconcontainer, Layout.center]}>
                                            <Image style={[style.iconimage]} source={require("../Assets/Images/chrome.pak.png")} />
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={[Gutters.tinyHMargin, Gutters.tinyVMargin]}>
                                    <View style={[style.namecontainer]}>
                                        <Text style={[style.nametext]}>
                                            {item?.name}
                                        </Text>
                                    </View>
                                    <View style={[style.iconandlocationcontainer, Layout.alignItemsCenter, Gutters.smallHPadding, Layout.row, Gutters.tinyBMargin]}>
                                        <Icon name="location-dot" color={"blue"} />
                                        <View style={[Gutters.tinyHMargin]}>
                                            <Text style={[style.locationtext]}>
                                                {item?.Location}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View> :
                            props.length <= 0 ? (
                                <View style={[style.cardcontainer, Gutters.tinyHMargin, Layout.rowVCenter, Gutters.regularTMargin]}>
                                    <View style={[style.cards]}>
                                        <View>
                                            <ImageBackground borderRadius={20} style={[style.backgroundimagecontainer]} source={require("../Assets/Images/m1.jpg")}>
                                                <View style={[style.iconcontainer, Layout.center]}>
                                                    <Image style={[style.iconimage]} source={require("../Assets/Images/chrome.pak.png")} />
                                                </View>
                                            </ImageBackground>
                                        </View>
                                        <View style={[Gutters.tinyHMargin, Gutters.tinyVMargin]}>
                                            <View style={[style.namecontainer]}>
                                                <Text style={[style.nametext]}>
                                                    {item?.name}
                                                </Text>
                                            </View>
                                            <View style={[style.iconandlocationcontainer, Layout.alignItemsCenter, Gutters.smallHPadding, Layout.row, Gutters.tinyBMargin]}>
                                                <Icon name="location-dot" color={"blue"} />
                                                <View style={[Gutters.tinyHMargin]}>
                                                    <Text style={[style.locationtext]}>
                                                        {item?.Location}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ) : (null)
                        }
                    </>
                )}
            />
        </View>
    )
}
export default MosqueList;

const style = StyleSheet.create({
    titletext: {
        fontSize: 18,
        fontWeight: '500'
    },
    pressabletext: {
        color: 'blue'
    },
    cardcontainer: {
        flex: 0.5,
        paddingHorizontal: 7
    },
    cards: {
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },
    backgroundimagecontainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: 88,
        width: '100%',
        borderRadius: 20
    },
    iconcontainer: {
        marginRight: 2,
        backgroundColor: 'pink',
        height: 25,
        width: 25,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    iconimage: {
        height: 10,
        width: 10
    },
    namecontainer: {
        marginLeft: 2
    },
    nametext: {
        color: 'black',
        fontSize: 12
    },
    iconandlocationcontainer: {
        paddingTop: 2,
    },
    locationtext: {
        fontSize: 10
    }
})