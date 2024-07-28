import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
    },
    textCreated: {
        color: "#4EA8DE",
    },
    textFinished: {
        color: "#8284FA",
    },
    valueContainer: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: "#333333",
        borderRadius: 999,
    },
    valueText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#D9D9D9",
    },
})