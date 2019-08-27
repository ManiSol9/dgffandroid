import React from 'react';
import { routesBeforeLogin } from '../config/routes';
import {
  createAppContainer,
} from 'react-navigation';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'orange' }];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
      <View style={styles.MainContainer}>
        <View style={styles.loadingImage}>
          <Image
            source={{uri: 'logo'}}
            style={{
              flex: 1,
              aspectRatio: 0.35,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    );
  }
}


export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    const Layout = this.state.signInStatus
    ? createAppContainer(routesBeforeLogin)
    : createAppContainer(routesBeforeLogin);

    return (
      <Layout />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC00',
  },
  loadingImage: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
});