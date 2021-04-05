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
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Signup({navigation}){
    return (
        <View style={styles.container}>
            
          <View style={styles.header}>
              <Text style={styles.text_header}>Register Now!</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
          >
              <ScrollView>
              <Text style={styles.text_footer}>Username</Text>
              <View style={styles.action}>
              <Icon
                      name="person"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Username"
                       placeholderTextColor="#a6a6a6"
                      style={styles.textInput}
                      autoCapitalize="none"
                    
                  />
                  
                  
                  
              </View>
  
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Password</Text>
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
  
              <Text style={[styles.text_footer, {
                  marginTop: 25
              }]}>Confirm Password</Text>
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
             
              <View style={styles.button}>
                  <TouchableOpacity
                      style={styles.signIn}
                      onPress={() => navigation.navigate('login')}
                  >
                  <LinearGradient
                      colors={['#3498db','#A6BDF5']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]} >Signup</Text>
                  </LinearGradient>
                  </TouchableOpacity>
  
                 
              </View>
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}
                       style={[styles.logIn,
                      {borderColor:'#344955',    
                      borderWidth:1,
                      marginTop:15}]}
                      >

                        <Text style={styles.textSign1}>Already have an account? login</Text>

                      
            </TouchableOpacity>
        </View>
              </ScrollView>
          </Animatable.View>
        </View>
      );
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
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#000000',
        fontSize: 18
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
        marginTop: 50
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
        color:'#383838'
      },
  });