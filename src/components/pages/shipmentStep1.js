import React, {Component, Fragment} from 'react';
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
  TextInput,
  Keyboard,
} from 'react-native';

import Modal from 'react-native-modal';

import Overlay from 'react-native-modal-overlay';

import {ScrollView} from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle';

const height = Dimensions.get('window').height - 80;
const width = Dimensions.get('window').width - 80;

import {Item, Input, Icon} from 'native-base';

export default class ShipmentStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shimpmentId: '#231231DASD4543'
    };
  }

  goToAlaram = () => {
    this.props.navigation.navigate('ShipmentStep2');
  };

  render() {
    console.log(this.state);

    return (
      <View style={styles.MainContainer}>
        <Header title={'Scan Shipment'} />
        <View
          style={{
            flex: 1,
            padding: 15,
            height: height,
            alignItems: 'center'
          }}>
          <View style={{height: 120, alignItems: 'center'}}>
            <ProgressCircle
              percent={30}
              radius={50}
              borderWidth={8}
              color="#FFCC00"
              shadowColor="#999"
              bgColor="#fff">
              <Text style={{fontSize: 18, fontFamily: 'Delivery_A_Rg'}}>
                {'Step 1'}
              </Text>
            </ProgressCircle>
          </View>
          <View style={{height: 60}}>
            <BackBorder />
          </View>

          <View
            style={styles.footer}>
            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={() => this.goToAlaram()}>
              <Text style={styles.buttonText}> Set Alaram </Text>
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
  inputSpace_1: {
    width: '38%',
    borderWidth: 1,
    paddingLeft: 5,
  },
  inputSpace_2: {
    width: '85%',
    borderWidth: 1,
    paddingLeft: 5,
  },
  titlePopUp: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignContent: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Delivery_A_Rg',
    textAlign: 'center',
  },
  inputTextBox: {
    alignContent: 'flex-start',
  },
  inputTags: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
  },
  inputText: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'Delivery_A_Rg',
  },
  selectBox: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC00',
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
    width: '80%',
  },
  popUpButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'whitesmoke',
    marginTop: 20,
    margin: 5,
  },
  popUpText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 22,
  },
  inputView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    backgroundColor: 'red',
    height: 100,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
    borderWidth: 1,
  },
  footer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});
