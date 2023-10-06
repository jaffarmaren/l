import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useTheme } from "@/Hooks";

const MenuLists = () => {
    const { Colors, Layout, Gutters } = useTheme();
    const menulists = [
        {
            name: "Hadith",
            image: require("../Assets/Images/man1.png")
        },
        {
            name: "dua",
            image: require("../Assets/Images/dua1.png")
        },
        {
            name: "Daily Verse",
            image: require("../Assets/Images/quran1.png")
        },
        {
            name: "Community",
            image: require("../Assets/Images/partners1.png")

        },
        {
            name: "Maps",
            image: require("../Assets/Images/map1.png")

        },
        {
            name: "More",
            image: require("../Assets/Images/Category.png")
        }
    ]
    return (
        <View style={[style.mainmenucontainer, { borderColor: Colors.inputBackground }]}>
            <View style={[style.cardscontainer, Layout.row, Gutters.smallBPadding]}>
                <FlatList
                    scrollEnabled={false}
                    data={menulists}
                    horizontal={false}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={[style.menu, Gutters.regularTPadding, Layout.alignItemsCenter]}>
                            <View style={[style.imagecontainer, { backgroundColor: Colors.inputBackground }]}>
                                <Image style={[style.images]} source={item?.image} />
                            </View>
                            <View style={[Gutters.tinyVMargin]}>
                                <Text style={[style.nametext]}>
                                    {item.name}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
export default MenuLists;
const style = StyleSheet.create({
    mainmenucontainer: {
        backgroundColor: 'rgba(255, 255, 255, .4)',
        borderWidth: 2,
        borderRadius: 30
    },
    cardscontainer: {
        flexWrap: 'wrap',
        paddingHorizontal: 20
    },
    menu: {
        flex: 0.5,

    },
    imagecontainer: {
        padding: 5,
        borderRadius: 10
    },
    images: {
        height: 40,
        width: 45
    },
    nametext: {
        color: 'black'
    }
})