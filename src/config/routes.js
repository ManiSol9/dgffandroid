import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

/*
import Screen1 from '../components/pages/Screen1';
import Screen2 from '../components/pages/Screen2';
import Screen3 from '../components/pages/Screen3';

*/
import Landing from '../components/pages/landing';
import SignIn from '../components/pages/signIn';
import Dashboard from '../components/pages/dashboard';
import ShipmentStep1 from '../components/pages/shipmentStep1';
import ShipmentStep2 from '../components/pages/shipmentStep2';
import ShipmentStep3 from '../components/pages/shipmentStep3';
import ShipmentStep4 from '../components/pages/shipmentStep4';
import Menu from '../components/pages/menu';

/*
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('../images/drawer.png')}
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Screen2,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


export const routesAfterLogin = createDrawerNavigator({
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
    },
  },
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 2',
    },
  },
  Screen3: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 3',
    },
  },
});

*/

export const routesBeforeLogin = createStackNavigator({

  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null,
    },
  },
  Landing: {
    screen: Landing,
    navigationOptions: {
      header: null,
    },
  },
  ShipmentStep1: {
    screen: ShipmentStep1,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
  ShipmentStep1: {
    screen: ShipmentStep1,
    navigationOptions: {
      header: null
    }
  },
  ShipmentStep2: {
    screen: ShipmentStep2,
    navigationOptions: {
      header: null
    }
  },
  ShipmentStep3: {
    screen: ShipmentStep3,
    navigationOptions: {
      header: null
    }
  },
  ShipmentStep4: {
    screen: ShipmentStep4,
    navigationOptions: {
      header: null
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null
    }
  },
});

/*

export const MainNavigation = createSwitchNavigator({
  routesBeforeLogin: routesBeforeLogin,
  routesAfterLogin: routesAfterLogin, // You will use this.props.navigation.replace('HomeDrawer') after login process.
});

*/
