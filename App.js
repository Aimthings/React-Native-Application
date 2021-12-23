import React from 'react';
import {AppRegistry, Image, View} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import ListItem from './app/components/ListItem';
import AccountsScreen from './app/screens/AccountsScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
  //  <Screen>
  //    <ListItem 
  //     title="My title" 
  //     // subTitle="My subtitle" 
  //     ImageComponent={<Icon name="email"/>}
  //     />
  //  </Screen>
    // <AccountsScreen/>
    <ListingsScreen/>
  );
} 


//It is good practice to use stylesheet.create because validations happens for javacript when we do like this rather than writing style properties 
//directly inside the braces

