import React from 'react';
import { View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fdc830", "#f37335"],
        title: "Sunny",
        subtitle: "😎 What a nice day!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#2c3e50', 'transparent'],
        title: "Clouds",
        subtitle: "Boring, boring"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ['#373b44', '#4286f4'],
        title: "Thunderstorm in the house",
        subtitle: "Watch out!!"
    },
    Drizzle: {
        iconName: "",
        gradient: []
    },
    Rain: {
        iconName: "",
        gradient: []
    },
    Snow: {
        iconName: "",
        gradient: []
    },
    Mist: {
        iconName: "",
        gradient: []
    },
    Dust: {
        iconName: "",
        gradient: []
    },
    Fog: {
        iconName: "",
        gradient: []
    },
    Smoke: {
        iconName: "",
        gradient: []
    },
    Sand: {
        iconName: "",
        gradient: []
    }
};

export default function Weather({temp,condition}){
    return (
    <LinearGradient
    colors={weatherOptions["Clouds"].gradient}
    style={styles.container}
    >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions["Clouds"] && weatherOptions["Clouds"].iconName || "weather-sunset"} color="white"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions["Clouds"].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions["Clouds"].subtitle}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Haze", "Dust", "Fog", "Smoke", "Sand", "Clear", "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {        
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
})