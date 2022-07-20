import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from './Color';
export const common = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: Colors.second,
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 20
    }
})