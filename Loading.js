import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

export default Loading = () => {
    return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>Getting the current weather</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#e1ff00"
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold"
    }
})