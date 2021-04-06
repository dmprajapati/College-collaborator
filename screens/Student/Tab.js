import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Chat from './Chat';
import Notice from './Notice';
import Home from './Home';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';



const Tab1 = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (

    <NavigationContainer>
      <Tab1.Navigator tabBarOptions={{ showIcon: true }} tabBarPosition={'bottom'} tabBar={props => <MyTabBar {...props} />}  >
        <Tab1.Screen name="Home" component={Home} />
        <Tab1.Screen name="Notice" component={Notice} />
        <Tab1.Screen name="Chat" component={Chat} />
      </Tab1.Navigator>
    </NavigationContainer>


  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: "#3498db", height: 60, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', paddingLeft: 65 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#fff' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}