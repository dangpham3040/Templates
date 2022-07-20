import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';

export const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    component: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    bannerBackground: {
        height: 150,
        width: "100%",
        marginVertical:10
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        padding: 0,
        margin: 0,
    },
    imgLogo: {
        height: 13,
        width: 60
    }
})