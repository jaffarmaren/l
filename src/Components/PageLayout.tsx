import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@/Hooks";

const PageLayout = (props:any) =>{
    const {Gutters,Layout} = useTheme();
    return (
        <View {...props} style={[style.pageLayouts,Gutters.regularVPadding,Layout.fill]}>
            {props.children}
        </View>
    )
}
export default PageLayout;

const style = StyleSheet.create({
    pageLayouts:{
        paddingHorizontal: 25,
        backgroundColor: '#F4E3FF'
    }
})