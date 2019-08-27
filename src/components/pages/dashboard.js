import React, {Component, Fragment} from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Header from './header';
import BackBorder from './backborder';
import {ScrollView} from 'react-native-gesture-handler';
const height = Dimensions.get('window').height - 80;
const width = Dimensions.get('window').width - 80;
const barHeight = 60;

import Overlay from 'react-native-modal-overlay';


import {ListItem, CheckBox, Body} from 'native-base';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: false,
        modalVisible: false
    };
  }

  startShipment = () => {
    this.props.navigation.navigate('ShipmentStep1');
  };

  checked = (val) => {
    if(val == true){
        this.setState({
            checked: false
        })
    } else {
        this.setState({
            checked: true
        })
    }
  }

  onClose = () => this.setState({modalVisible: false});

  endShipment = () => {

    if(this.state.checked == true){
        this.setState({
            modalVisible: true
        })
    }

  }

  render() {
    return (
      <View>
        <View style={styles.MainContainer}>
          <Header title={'Create / End Shipment'} />

          <View
            style={{
              flex: 1,
              padding: 15,
            }}>
            <View style={{ height: 250 }}>
              <Text style={styles.bodeyHeader}>Create Shipment</Text>
              <Text style={styles.bodeyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </Text>
              <View style={{padding: 10, marginLeft: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.listBullet} />
                  <Text style={styles.listText}>
                    Lorem ipsum dolor sit amet,
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.listBullet} />
                  <Text style={styles.listText}>
                    Lorem ipsum dolor sit amet
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.listBullet} />
                  <Text style={styles.listText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </View>
              </View>
              <View style={styles.bodyImage}>
                <TouchableOpacity
                  style={styles.buttonSignIn}
                  onPress={() => this.startShipment()}>
                  <Image
                    source={require('../../images/start.png')}
                    style={{width: 150, height: 100, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: barHeight}}>
              <BackBorder />
            </View>
            <View
              style={{
                height: 350,
              }}>
              <Text style={styles.bodeyHeader}>End Shipment</Text>
              <Text style={styles.bodeyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </Text>
              <View style={{padding: 10, marginLeft: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.listBullet} />
                  <Text style={styles.listText}>
                    Lorem ipsum dolor sit amet,
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.listBullet} />
                  <Text style={styles.listText}>
                    Lorem ipsum dolor sit amet
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.listBullet} />
                  <Text style={styles.listText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </View>
              </View>
              <View styles={{marginBottom: 20}}>
                <CheckBox onPress={()=> this.checked(this.state.checked)} checked={this.state.checked} color="#D40511" style={{width: 20}} />
                <View style={{paddingLeft: 40, flex: 1, marginTop: -23}}>
                  <Text
                    style={styles.bodeySecondHeader}
                    styles={{paddingLeft: 5}}>
                    Manual Entry
                  </Text>
                  <Text style={styles.bodeysecondText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </Text>
                </View>
              </View>
              <View style={styles.bodyImage1}>
                <TouchableOpacity
                  style={styles.buttonSignIn}
                  onPress={() => this.endShipment()}>
                  <Image
                    source={require('../../images/end.png')}
                    style={{width: 150, height: 100, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
            <View style={{width: width, height: height}}>
              <View style={styles.titlePopUp}>
                <Text style={styles.titleText}>
                  {' '}
                  Select operator then enter value{' '}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>

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
  bodeyText: {
    color: 'black',
    fontSize: 16,
    opacity: 0.7,
    marginLeft: 0,
  },
  listText: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
    fontSize: 16,
    opacity: 0.7,
  },
  listBullet: {
    width: 10,
    height: 10,
    backgroundColor: '#D40511',
    top: 5,
  },
  bodyImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyImage1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%'
  },
  borderLine: {
    height: 2,
    backgroundColor: 'black',
  },
  bodeySecondHeader: {
    color: '#D40511',
    fontSize: 18,
    fontWeight: '500',
  },
});
