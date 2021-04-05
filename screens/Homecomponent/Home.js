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
  Image,
  StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BoxShadow } from 'react-native-shadow';


export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.top}>



        <View style={styles.top_icon}>
          <Icon
            name="menu"
            color="#fff"
            size={30}
          />
          <Text style={styles.top_text}>Welcome</Text>
          <Icon
            name="person"
            color="#fff"
            size={30}
          />
        </View>

        <View style={styles.view_top_info}>
          <Text style={styles.text_top_info}>
            Attendance
              </Text>
          <Text style={styles.text_top_info}>
            100%
              </Text>
        </View>
        <View style={styles.view_top_info}>
          <Text style={styles.text_top_info}>
            Assignment
              </Text>
          <Text style={styles.text_top_info}>
            5/10
              </Text>
        </View>

      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={styles.bottom}
      >


        <ScrollView showsVerticalScrollIndicator={false} >

          <View style={styles.middle}>

            <View style={styles.card}>
              <Icon
                name="person"
                color="#fff"
                size={50}
              />
              
            </View>

          </View>
          <Text style={styles.card_title}>Attendance</Text>

        </ScrollView>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },
  top: {
    flex: 3,
    height: '25%',
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
  view_top_info: {
    color: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  text_top_info: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scrollView: {

  },
  bottom: {
    height: '82%',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },


  middle:
  {
    height: 200,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  card: {
    height: 140,
    width: '40%',
    borderRadius: 100,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card_title: {
    color: '#000',
    fontSize: 20,
    justifyContent:'flex-start'
    
  }


});