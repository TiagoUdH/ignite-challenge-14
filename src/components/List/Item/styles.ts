import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 8,
        marginBottom: 8,

        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 8,
        backgroundColor: "#262626",

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        flexShrink: 1,
        gap: 8,
    },
    checkbox: {
        width: 18,
        height: 18,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: 9,
        borderWidth: 2,
    },
    unchecked: {
        borderColor: "#4EA8DE",
    },
    checked: {
        borderColor: "#5E60CE",
        backgroundColor: "#5E60CE"
    },
    text: {
        lineHeight: 19,
        flexShrink: 1,
    },
    textUnchecked: {
        color: "#F2F2F2",
    },
    textChecked: {
        textDecorationLine: "line-through",
        color: "#808080",
    },
    trashButton: {
        paddingHorizontal: 10,
        paddingVertical: 9,
    },
})