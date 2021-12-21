import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ImageBackground } from 'react-native';


export default class LoginScreen extends Component {
    render() {
        return (
            <View styles={styles.container}>
                <ImageBackground source={require("../assets/backgroundimage.png")} style={styles.bgImage}>
                    <View style={styles.upperContainer}>
                        <Image source={require("../assets/appicon.png")} style={styles.appIcon} />
                        <Text style={styles.titleText}>Login</Text>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.studentlogin}>
                            <View style={styles.studentimage}>
                            <Image source={require("../assets/studentimage.png")}  style={styles.image}/>
                            </View>
                            <TouchableOpacity style={styles.Button}>
                                <Text style={styles.ButtonText}>Student</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.studentlogin, { marginTop: 30 }]}>
                            <View style={styles.studentimage}>
                            <Image source={require("../assets/teacherimage.png")}  style={styles.image} />
                            </View>
                            <TouchableOpacity style={styles.Button}>
                                <Text style={styles.ButtonText}>Teacher</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    appIcon: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginTop: 80
    },
    upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "red"
    },
    lowerContainer: {
        marginTop: 50,
        flex: 0.5,
        alignItems: "center",
        borderColor: "maroon"
    },
    titleText: {
        fontSize: 50,
        color: "white",
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    Button: {
        width: 400,
        height: 70,
        backgroundColor: "#d6833a",
        borderRadius: 10,
        marginTop: 20,
        marginRight:120,
        justifyContent: "center",
        alignSelf: "center"
    },
    ButtonText: {
        color: "white",
        fontSize: 24,
        textAlign:"center"
    },

    studentlogin: {
        flexDirection: "row",
        backgroundColor: "transparent",


    }, studentimage: {
        width: 150,
        height: 150,
        marginRight:60,
        borderRadius: "50%",
        backgroundColor: "#b2a4de",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    image:{
    width:100,
    height:100,
    resizeMode:"contain",
  
   

    }

})
