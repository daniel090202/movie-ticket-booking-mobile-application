import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';

import CustomerIcon from '../components/CustomerIcon';
import {COLORS, SPACING, FONT_SIZE} from '../theme/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="UserAccount" component={UserAccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
