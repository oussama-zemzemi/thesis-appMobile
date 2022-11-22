import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Pressable, Text, Modal, View, Button, LogoTitle, RefreshControl } from 'react-native';
import Intro from './Intro';
import StudentLogin from './students/StudentLogin';
import OwnerRegistration from './homeOwner/auth/OwnerSignupForm'
import OwnerLoginForm from './homeOwner/auth/OwnerLoginForm'
import Splashscreen from './Splashscreen';


export default function navigation({ }) {
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer style={styles.container}>

            <Stack.Navigator initialRouteName="Intro">
                <Stack.Screen
                    name="Intro"
                    component={Intro}
                    options={{ headerShown: false }}

                />
             


<Stack.Screen
                    name="StudentLogin"
                    component={StudentLogin}
                    options={{ headerShown: false }}

                />
                
                <Stack.Screen
                    name="OwnerLoginForm"
                    component={OwnerLoginForm}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="OwnerRegistration"
                    options={{ headerShown: false }}
                    component={OwnerRegistration}
                />



            




            </Stack.Navigator>

        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})