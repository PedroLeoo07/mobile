import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.textRed}>Sem persistência: Nenhum texto salvo</Text>
            <Text style={styles.textGreen}>Persistência: Nenhum texto salvo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF1493",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    textRed: {
        color: "black",
        fontSize: 16,
    },
    textGreen: {
        color: "red",
        fontSize: 16,
    },
});