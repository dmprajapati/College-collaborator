import React, { Component } from 'react';

import {
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    borderColor
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Student_Register extends Component {

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.text_footer}>Firstname</Text>
                        <View style={styles.action}>
                            <Icon
                                name="person"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Firstname"
                                placeholderTextColor="#a6a6a6"
                                style={styles.textInput}
                                autoCapitalize="none"

                            />



                        </View>
                        <Text style={styles.text_footer}>Middlename</Text>
                        <View style={styles.action}>
                            <Icon
                                name="person"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Middlename"
                                placeholderTextColor="#a6a6a6"
                                style={styles.textInput}
                                autoCapitalize="none"

                            />
                        </View>
                        <Text style={styles.text_footer}>Lastname</Text>
                        <View style={styles.action}>
                            <Icon
                                name="person"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Lastname"
                                placeholderTextColor="#a6a6a6"
                                style={styles.textInput}
                                autoCapitalize="none"

                            />
                        </View>


                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <Icon
                                name="email"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                placeholderTextColor="#a6a6a6"
                                style={styles.textInput}
                                autoCapitalize="none"

                            />
                        </View>

                        <Text style={styles.text_footer}>Password</Text>
                        <View style={styles.action}>
                            <Icon
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={true}
                                style={styles.textInput}
                                autoCapitalize="none"

                            />
                            <TouchableOpacity>

                                <Icon
                                    name="visibility"
                                    color="black"
                                    size={20}
                                />

                            </TouchableOpacity>
                        </View>

                        <Text style={styles.text_footer}>Confirm Password</Text>
                        <View style={styles.action}>
                            <Icon
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Your Password"
                                secureTextEntry={true}
                                style={styles.textInput}
                                autoCapitalize="none"

                            />

                        </View>
                        <Text style={styles.text_footer}>Phone No</Text>
                        <View style={styles.action}>
                            <Icon
                                name="phone"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Phone No"
                                placeholderTextColor="#a6a6a6"
                                keyboardType="number-pad"
                                style={styles.textInput}
                                autoCapitalize="none"

                            />
                        </View>
                        <Text style={styles.text_footer}>College Name</Text>
                        <View style={styles.action} />
                        <DropDownPicker
                            items={[
                                { label: 'LDRP-ITR', value: 'LDRP-ITR' },

                            ]}
                            containerStyle={{ height: 40 }}
                            style={styles.textInput}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <Text style={styles.text_footer}>Stream</Text>
                        <View style={styles.action} />
                        <DropDownPicker
                            items={[
                                { label: 'BE', value: 'BE' },
                                { label: 'ME', value: 'ME' },

                            ]}
                            containerStyle={{ height: 40 }}
                            style={styles.textInput}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <Text style={styles.text_footer}>Branch</Text>
                        <View style={styles.action} />
                        <DropDownPicker
                            items={[
                                { label: 'Computer-engineering', value: 'Computer-engineering' },
                                { label: 'Information-Technology', value: 'Information-Technology' },

                            ]}
                            containerStyle={{ height: 40 }}
                            style={styles.textInput}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <Text style={styles.text_footer}>Semester</Text>
                        <View style={styles.action} />
                        <DropDownPicker
                            items={[
                                { label: '1', value: '1' },
                                { label: '2', value: '2' },

                            ]}
                            containerStyle={{ height: 40 }}
                            style={styles.textInput}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <Text style={styles.text_footer}>Division</Text>
                        <View style={styles.action} />
                        <DropDownPicker
                            items={[
                                { label: 'B', value: 'B' },
                                { label: 'D', value: 'D' },

                            ]}
                            containerStyle={{ height: 40 }}
                            style={styles.textInput}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                        <Text style={styles.text_footer}>Enrollment No</Text>
                        <View style={styles.action}>
                            <Icon
                                name="keyboard"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Enrollment No"
                                placeholderTextColor="#a6a6a6"
                                style={styles.textInput}
                                autoCapitalize="none"

                            />
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={() => navigation.navigate('login')}
                            >
                                <LinearGradient
                                    colors={['#3498db', '#A6BDF5']}
                                    style={styles.signIn}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]} >Confirm</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                        {/* <View>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}
                            style={[styles.logIn,
                            {
                                borderColor: '#344955',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >

                            <Text style={styles.textSign1}>Already have an account? login</Text>


                        </TouchableOpacity>
                    </View> */}
                    </ScrollView>
                </Animatable.View>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 0.5
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#000000',
        fontSize: 18,
        marginTop: 25
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    logIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#383838'
    },
});