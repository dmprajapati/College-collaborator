import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Chat({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.top}>



                <View style={styles.top_icon}>
                    <Icon
                        name="menu"
                        color="#fff"
                        size={30}
                    />
                    <Text style={styles.top_text}>Chat</Text>
                    <Icon
                        name="person"
                        color="#fff"
                        size={30}
                    />
                </View>

            </View>


            <Animatable.View
                animation="fadeInUpBig"
                style={styles.bottom}
            >


                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.middle}>


                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Faculty</Text>
                        </View>


                    </View>
                    <View style={styles.middle}>

                        <View style={styles.card}>

                            <Text style={styles.cardTitle}>Admin</Text>

                        </View>

                    </View>
                    <View style={styles.middle}>

                        <View style={styles.card}>

                            <Text style={styles.cardTitle}>Admin</Text>

                        </View>

                    </View>





                </ScrollView>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    top: {
        flex: 1,
        height: '10%',
        width: '100%',
        backgroundColor: '#3498db',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    top_icon:
    {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    top_text: {
        fontSize: 25,
        color: '#fff'
    },
    bottom: {
        height: '92%',
        width: '100%',
        paddingVertical: 10
    },
    middle:
    {
        height: 90,
        width: '100%',
        flexDirection: 'row',

    },

    card: {
        height: 80,
        width: '100%',
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },

});