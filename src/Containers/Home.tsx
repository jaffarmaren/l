import React from "react";
import { ScrollView, View, StyleSheet, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Feather";
import PageLayout from "@/Components/PageLayout";
import { useTheme } from "@/Hooks";
import { LocationComponent, MosqueTime, Menu, MosqueList } from "@/Components";

export const Mosquelists = [
    {
        Image: "../../../../assets/images/m1.jpg",
        name: "Makkah Mosque",
        Location: "inda, Telangana,Hyderabad,500036"
    },
    {
        Image: "../../../../assets/images/m1.jpg",
        name: "AbuBakkae Mosque",
        Location: "inda, Telangana,Hyderabad,500036"
    },
    {
        Image: "../../../../assets/images/m1.jpg",
        name: "Aqsa Mosque",
        Location: "inda, Telangana,Hyderabad,500036"
    },
    {
        Image: "../../../../assets/images/m1.jpg",
        name: "Fatima Mosque",
        Location: "inda, Telangana,Hyderabad,500036"
    },
    {
        Image: "../../../../assets/images/m1.jpg",
        name: "Madina Mosque",
        Location: "inda, Telangana,Hyderabad,500036"
    },
    {
        Image: "../../../../assets/images/m1.jpg",
        name: "omar Mosque",
        Location: "inda, Telangana,Hyderabad,500036"
    }
]
const Home = () => {
    const { Common, Fonts, Gutters, Layout, Colors } = useTheme()

    return (
        <PageLayout>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={[Layout.fill, Layout.row, Layout.justifyContentBetween]}>
                    <View style={[style.InputMaterials, Layout.row, Gutters.smallRMargin, { borderColor: Colors.inputBackground }]}>
                        <View style={[Layout.justifyContentCenter, Gutters.smallLMargin]}>
                            <Image style={[style.SearchImage]} source={require("../Assets/Images/search-.png")} />
                        </View>
                        <View style={[Layout.fill, { paddingHorizontal: 5 }]}>
                            <TextInput placeholder="Find" style={[style.textiput, { borderColor: Colors.inputBackground }]} />
                        </View>
                        <View style={[Layout.justifyContentCenter, Gutters.smallRPadding]}>
                            <Icon1 name="search" size={30} />
                        </View>
                    </View>
                    <View style={[style.belliconcontainer, Layout.justifyContentCenter, Gutters.regularHPadding, { borderColor: Colors.inputBackground }]}>
                        <Icon name="bell" size={18} />
                    </View>
                </View>
                <LocationComponent />
                <MosqueTime />
                <Menu />
                <MosqueList title="Mosques" navi="Show All" mosquesdata={Mosquelists} length="4" />
            </ScrollView>
        </PageLayout>
    )
}
export default Home;
const style = StyleSheet.create({
    InputMaterials: {
        backgroundColor: 'rgba(255, 255, 255, .4)',
        flex: 0.9,
        borderRadius: 10,
        borderWidth: 1,
    },
    SearchImage: {
        height: 25,
        width: 20
    },
    textiput: {
        borderStyle: 'solid',
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, .0)'
    },
    belliconcontainer: {
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, .4)',
        borderRadius: 10
    }
})