import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const height = Dimensions.get('window').height - 80;
const width = Dimensions.get('window').width - 80;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC00',
  },
  bodeyHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  circle: {
    width: 100,
    height: 100,
    top: 5,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignIn: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 5,
    top: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  circleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  loadingImage: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
});
