import React, {Component} from 'react';
import Header from './header';
import BackBorder from './backborder';

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

export default class ShipmentStep4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToAlaram = () => {
    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Header title={'Thank You'} />
        <View
          style={{
            padding: 15,
            flex: 1,
            alignItems: 'center'
          }}>
          <View style={{marginTop: 30}}>
            <Text style={styles.labaleText}>Your shipment has been successfully registered.</Text>
          </View>

          <View style={styles.borderFill} />

          <View style={styles.infoBox}>
            <Text style={styles.labaleTitle}>Shipment Number</Text>
            <Text style={styles.labaleText}>#1231231232131231321</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.labaleTitle}>Reference #</Text>
            <Text style={styles.labaleText}>#1231231232131231321</Text>
          </View>

          <View
            style={styles.footer}>
            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={() => this.goToAlaram()}>
              <Text style={styles.buttonText}> Home </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
    //top: 30,
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
    container: {
    flex: 1,
    padding: 0,
    paddingTop: 15,
    backgroundColor: '#fff',
    height: 200,
  },
  head: {height: 40, backgroundColor: '#FFCC00', fontFamily: 'Delivery_A_Rg', fontSize: 17},
  text: {margin: 6, fontFamily: 'Delivery_A_Rg', fontSize: 16},
  infoBox: {
    height: 100,
    top: 20,
  },
  labaleTitle: {
    fontFamily: 'Delivery_A_Rg',
    fontSize: 20,
    marginBottom: 10
  },
  labaleText: {
    fontFamily: 'Delivery_A_Rg',
    fontSize: 30,
  },
  inputView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 100
  },
  borderFill: {
    borderWidth: 1,
    height: 1,
    top: 20,
    opacity: 0.5,
    marginBottom: 60
  },
  footer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});
