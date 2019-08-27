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

import Overlay from 'react-native-modal-overlay';

import {ScrollView} from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle';

const height = Dimensions.get('window').height - 80;
const width = Dimensions.get('window').width - 80;

import {Item, Input, Icon} from 'native-base';

export default class ShipmentStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tempReading: null,
      humidityReading: null,
      shockReading: null,
      isModalVisible: false,
      modalVisible: false,
      selectedProp: null,
      tempProptype: null,
      humProptype: null,
      shockpProptype: null,
      tempMaxValue: '',
      tempMinValue: '',
      tempParamType: null,
      humParamType: null,
      humMaxValue: '',
      humMinValue: '',
      shockParamtype: null,
      shockMaxValue: '',
      shockMinValue: '',
      email: '',
    };
  }

  goToAlaram = () => {
    //this.props.navigation.navigate('ShipmentStep2');
  };

  showPopUp = type => {
    if (type == 'T') {
      this.setState({
        modalVisible: true,
        tempParamType: type,
        selectedProp: type,
      });
    } else if (type == 'H') {
      this.setState({
        modalVisible: true,
        humParamType: type,
        selectedProp: type,
      });
    } else {
      this.setState({
        modalVisible: true,
        shockParamType: type,
        selectedProp: type,
      });
    }
  };

  addValue = value => {
    if (this.state.selectedProp == 'T') {
      this.setState({
        tempProptype: value,
        modalVisible: false,
      });
    } else if (this.state.selectedProp == 'H') {
      this.setState({
        humProptype: value,
        modalVisible: false,
      });
    } else {
      this.setState({
        shockProptype: value,
        modalVisible: false,
      });
    }
  };

  onClose = () => this.setState({modalVisible: false});

  onChangeTempMax(text, fieldName) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert('please enter numbers only');
      }
    }
    this.setState({tempMaxValue: newText});
  }

  onChangeTempMin(text, fieldName) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert('please enter numbers only');
      }
    }
    this.setState({tempMinValue: newText});
  }

  onChangeHumMax(text, fieldName) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert('please enter numbers only');
      }
    }
    this.setState({humMaxValue: newText});
  }

  onChangeHumMin(text, fieldName) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert('please enter numbers only');
      }
    }
    this.setState({humMinValue: newText});
  }

  onChangeShockMax(text, fieldName) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert('please enter numbers only');
      }
    }
    this.setState({shockMaxValue: newText});
  }

  onChangeShockMin(text, fieldName) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert('please enter numbers only');
      }
    }
    this.setState({shockMinValue: newText});
  }

  onChangeEmail = text => {
    this.setState({
      email: text,
    });
  };

  checkPropSelected = val => {
    console.log(this.state);
    if (this.state.tempParamType == null) {
      alert('Please select Parameter type');
      Keyboard.dismiss();
    }
  };

  saveData = () => {
    const {
      tempParamType,
      tempMaxValue,
      tempMinValue,
      humMaxValue,
      humMinValue,
      humParamType,
      shockMaxValue,
      shockMinValue,
      shockParamType,
      email,
    } = this.state;

    this.props.navigation.navigate('ShipmentStep3');

    /*

    if (
      tempParamType != null &&
      (tempMinValue != '' || tempMaxValue != '') &&
      humParamType != null &&
      (humMaxValue != '' || humMinValue != '') &&
      shockParamType != null &&
      (shockMaxValue != '' || shockMinValue != '') &&
      email != null
    ) {
      this.props.navigation.navigate('ShipmentStep3');
    } else {
      alert('Please fill the required fields');
    }

    */
  };

  render() {
    console.log(this.state);

    return (
      <View style={styles.MainContainer}>
        <Header title={'Alaram Configuration'} />
        <ScrollView style={{flex: 1, height: height}}>
          <View style={{padding: 15, flex: 1}}>
            <View
              style={{
                flex: 1,
                height: 120,
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <ProgressCircle
                percent={60}
                radius={50}
                borderWidth={8}
                color="#FFCC00"
                shadowColor="#999"
                bgColor="#fff">
                <Text style={{fontSize: 18, fontFamily: 'Delivery_A_Rg'}}>
                  {'Step 2'}
                </Text>
              </ProgressCircle>
            </View>
            <View style={{height: 60}}>
              <BackBorder />
            </View>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <View
                style={{
                  alignContent: 'flex-start',
                  width: '85%',
                  marginTop: 10,
                }}>
                <Text style={styles.inputText}>Temperature </Text>
              </View>
              <View style={styles.inputTags}>
                <Item
                  style={
                    this.state.tempProptype === '-'
                      ? styles.inputSpace_1
                      : styles.inputSpace_2
                  }
                  regular>
                  <TouchableOpacity onPress={() => this.showPopUp('T')}>
                    <View style={styles.selectBox}>
                      <Text style={styles.popUpText}>
                        {this.state.tempProptype != null &&
                        this.state.tempParamType == 'T'
                          ? this.state.tempProptype
                          : '?'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Input
                    placeholder="0"
                    style={styles.inputTextBox}
                    keyboardType="numeric"
                    maxLength={3}
                    value={this.state.tempMaxValue}
                    name="tempMaxValue"
                    onChangeText={text =>
                      this.onChangeTempMax(text, 'tempMaxValue')
                    }
                    onFocus={() => this.checkPropSelected('T')}
                  />
                </Item>

                {this.state.tempProptype === '-' ? (
                  <View
                    style={{
                      width: '10%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.inputText}>-</Text>
                  </View>
                ) : (
                  <Text />
                )}

                {this.state.tempProptype === '-' ? (
                  <Item
                    style={
                      this.state.tempProptype === '-'
                        ? styles.inputSpace_1
                        : styles.inputSpace_2
                    }
                    regular>
                    <Input
                      placeholder="0"
                      style={styles.inputTextBox}
                      keyboardType="numeric"
                      maxLength={3}
                      value={this.state.tempMinValue}
                      name="tempMinValue"
                      onChangeText={text =>
                        this.onChangeTempMin(text, 'tempMinValue')
                      }
                    />
                  </Item>
                ) : (
                  <Text />
                )}
              </View>

              <View
                style={{
                  alignContent: 'flex-start',
                  width: '85%',
                  marginTop: 10,
                }}>
                <Text style={styles.inputText}>Humidity </Text>
              </View>
              <View style={styles.inputTags}>
                <Item
                  style={
                    this.state.humProptype === '-'
                      ? styles.inputSpace_1
                      : styles.inputSpace_2
                  }
                  regular>
                  <TouchableOpacity onPress={() => this.showPopUp('H')}>
                    <View style={styles.selectBox}>
                      <Text style={styles.popUpText}>
                        {this.state.humProptype != null &&
                        this.state.humParamType == 'H'
                          ? this.state.humProptype
                          : '?'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Input
                    placeholder="0"
                    style={styles.inputTextBox}
                    keyboardType="numeric"
                    maxLength={3}
                    value={this.state.humMaxValue}
                    name="humMaxValue"
                    onChangeText={text =>
                      this.onChangeHumMax(text, 'tempMaxValue')
                    }
                    onFocus={() => this.checkPropSelected('H')}
                  />
                </Item>

                {this.state.humProptype === '-' ? (
                  <View
                    style={{
                      width: '10%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.inputText}>-</Text>
                  </View>
                ) : (
                  <Text />
                )}

                {this.state.humProptype === '-' ? (
                  <Item
                    style={
                      this.state.humProptype === '-'
                        ? styles.inputSpace_1
                        : styles.inputSpace_2
                    }
                    regular>
                    <Input
                      placeholder="0"
                      style={styles.inputTextBox}
                      keyboardType="numeric"
                      maxLength={3}
                      value={this.state.humMinValue}
                      name="humMinValue"
                      onChangeText={text =>
                        this.onChangeHumMin(text, 'tempMinValue')
                      }
                    />
                  </Item>
                ) : (
                  <Text />
                )}
              </View>

              <View
                style={{
                  alignContent: 'flex-start',
                  width: '85%',
                  marginTop: 10,
                }}>
                <Text style={styles.inputText}>Shock </Text>
              </View>
              <View style={styles.inputTags}>
                <Item
                  style={
                    this.state.shockProptype === '-'
                      ? styles.inputSpace_1
                      : styles.inputSpace_2
                  }
                  regular>
                  <TouchableOpacity onPress={() => this.showPopUp('S')}>
                    <View style={styles.selectBox}>
                      <Text style={styles.popUpText}>
                        {this.state.shockProptype != null &&
                        this.state.shockParamType == 'S'
                          ? this.state.shockProptype
                          : '?'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Input
                    placeholder="0"
                    style={styles.inputTextBox}
                    keyboardType="numeric"
                    maxLength={3}
                    value={this.state.shockMaxValue}
                    name="humMaxValue"
                    onChangeText={text =>
                      this.onChangeShockMax(text, 'tempMaxValue')
                    }
                    onFocus={() => this.checkPropSelected('S')}
                  />
                </Item>

                {this.state.shockProptype === '-' ? (
                  <View
                    style={{
                      width: '10%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.inputText}>-</Text>
                  </View>
                ) : (
                  <Text />
                )}

                {this.state.shockProptype === '-' ? (
                  <Item
                    style={
                      this.state.shockProptype === '-'
                        ? styles.inputSpace_1
                        : styles.inputSpace_2
                    }
                    regular>
                    <Input
                      placeholder="0"
                      style={styles.inputTextBox}
                      keyboardType="numeric"
                      maxLength={3}
                      value={this.state.shockMinValue}
                      name="humMinValue"
                      onChangeText={text =>
                        this.onChangeShockMin(text, 'tempMinValue')
                      }
                    />
                  </Item>
                ) : (
                  <Text />
                )}
              </View>

              <View
                style={{
                  alignContent: 'flex-start',
                  width: '85%',
                  marginTop: 10,
                }}>
                <Text style={styles.inputText}>Notification Email </Text>
              </View>
              <View style={styles.inputTags}>
                <Item style={styles.inputSpace_2} regular>
                  <Input
                    placeholder="Please enter email"
                    style={styles.inputTextBox}
                    value={this.state.email}
                    name="email"
                    onChangeText={text =>
                      this.onChangeEmail(text, 'tempMaxValue')
                    }
                  />
                </Item>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => this.saveData()}>
            <Text style={styles.buttonText}> Create Shipment </Text>
          </TouchableOpacity>
        </View>

        <Overlay
          visible={this.state.modalVisible}
          onClose={this.onClose}
          closeOnTouchOutside
          animationType="zoomIn"
          containerStyle={{backgroundColor: 'rgba(0,0,0,.8)'}}
          childrenWrapperStyle={{backgroundColor: '#eee', borderRadius: 2}}
          animationDuration={500}>
          {(hideModal, overlayState) => (
            <View style={{width: width}}>
              <View style={styles.titlePopUp}>
                <Text style={styles.titleText}>
                  {' '}
                  Select operator then enter value{' '}
                </Text>
              </View>
              <View
                style={{
                  flec: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => this.addValue('<')}>
                  <View style={styles.popUpButton}>
                    <Text style={styles.popUpText}> {'<'} </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.addValue('>')}>
                  <View style={styles.popUpButton}>
                    <Text style={styles.popUpText}> {'>'} </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.addValue('-')}>
                  <View style={styles.popUpButton}>
                    <Text style={styles.popUpText}> {'-'} </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.addValue('<=')}>
                  <View style={styles.popUpButton}>
                    <Text style={styles.popUpText}> {'<='} </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.addValue('>=')}>
                  <View style={styles.popUpButton}>
                    <Text style={styles.popUpText}> {'>='} </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Overlay>
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
    height: 200,
    backgroundColor: 'red',
    width: '100%',
    padding: 10,
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
    //position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
