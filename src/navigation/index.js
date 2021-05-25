import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import { Movie, Movies } from '../screens';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitle: '',
        })}
      />
    </Stack.Navigator>
  );
}

export default DrawerNavigator;
